#-*- coding: utf-8 -*-

from bottle import *
from threading import Thread
import os,time

class Thread_watcher_sank(Thread):
    # file state
    STATE = 0
    UNOPENED = 0
    OPENED = 1
    UPLOADED = 2
    
    # data list state
    ARREY = 0
    WATTING = 1
    NONE = 0
    FULL = 2 #more than 5.
    
    WATTINGTOUPLOAD = 0 # 0 | 1
    
    def __init__(self):
        super().__init__()
        self.user_name_list = list()
        self.user_passage_list = list()
        self.user_ip_list = list()
        self.user_date_list = list()
        
    def _openFile(self):
        # 用xml储存数据
        os.chdir(r'../viewer/')
        self.fp = open('trans.xml','a')
        self.STATE = self.OPENED
        
    def addData(self,user_name,user_passage,user_ip,user_date):
        self.user_name_list.append(user_name)
        self.user_passage_list.append(user_passage)
        self.user_ip_list.append(user_ip)
        self.user_date_list.append(user_date)
        if self.user_name_list.__len__() >= 5: self.ARREY = self.FULL
        else: self.ARREY = self.WATTING
        self.WATTINGTOUPLOAD = 1
        
    def _closeFile(self):
        self.fp.close()
        self.STATE = self.UNOPENED
        
    def _writeData(self):
        # 到一个指定位置追加
        for i in range(self.user_name_list.__len__()):
            self.fp.write('''
<article>
  <author>%s</author>
  <date>%s</date>
  <ip>%s</ip>
  <passage>%s</passage>
</article>''' %(self.user_name_list[i],self.user_date_list[i],self.user_ip_list[i],self.user_passage_list[i]))
        self.fp.flush()
        
        self.ARREY = self.NONE;
        self.user_name_list = list()
        self.user_passage_list = list()
        self.user_ip_list = list()
        self.user_date_list = list()
        
    def _uploadFile(self):
        self.STATE = self.UPLOADED
        # os.system('''cd ~/hpxy.github.io/server
        # bash gitoperate.sh < autoInput.h''')
        self.STATE = self.OPENED
        
    def run(self):
        i = 0
        while True:
            i += 1
            time.sleep(60)
            
            # 1 min to write data.
            if i and self.ARREY > 0: #rather NONE
                if self.STATE == self.UNOPENED: self._openFile()
                elif self.STATE == self.UPLOADED: continue; #pass this test
                self._writeData()
            
            # 5 min to close file.
            if i % 5 == 0 and self.STATE == self.OPENED: self._closeFile()
                
            # 15 min to upload file.
            if i % 15 == 0 and self.WATTINGTOUPLOAD:
                if self.STATE == self.OPENED: self._closeFile()
                self.STATE = self.UPLOADED
                self._uploadFile()
                
watcher_sank = Thread_watcher_sank()
watcher_sank.start()
app = Bottle()

@app.route('/trans',method='post')
def getData():
    user_name = request.forms.get('name')#.replace('<','&lt;'),replace('>','&lt;')
    user_passage = request.forms.get('user_passage')#.replace('<','&lt;'),replace('>','&lt;')
    user_ip = request.environ.get('REMOTE_ADDR')
    user_date = time.strftime("%Y-%m-%d %H:%M")
    watcher_sank.addData(user_name,user_passage,user_ip,user_date)
    
    return r'''
    <p class="sentence">静待漂流瓶入海...</p>
    <script>
    setTimeout(function() { window.location = 'https://hpxy.github.io/viewer/sentence.html' },2000)
    </script>
    ''';

app.run(host='localhost',post=8080)
