#此为index.py文件的函数库！
import time
import random
def csh ():    #初始化
    print ('欢迎使用Yeusint翼讯函数库！')
    time.sleep (1)
    print ('正在初始化！')
    time.sleep (random.randint(1,5))
    print ('初始化完成！请使用...')
def bj ():    #比较,a,b,c
    print ('请输入第一个比较值...')
    a = input ()
    while a == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入第一个比较值...')
        a = input ()
        if a != "":
            break
    print ('第一个比较值为：',a)
    time.sleep (1)
    print ('请输入第二个比较值...')
    b = input ()
    while b == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入第二个比较值...')
        b = input ()
        if b != "":
            break
    print ('第二个比较值为：',b)
    time.sleep (1)
    print ('正在比较...')
    c = random.randint(1,3)
    time.sleep (c)
    if a > b:
        print ('第一个比较值大~')
        time.sleep (1)
        print ('大的值为：',a)
    elif a < b:
        print ('第二个比较值大~')
        time.sleep (1)
        print ('大的值为：',b)
    else:
        print ('额...两个比较值相等哦~')


def jf ():  #加法,d,e,f,g
    print ('请输入第一个加数...')
    d = input ()
    d = int (d)
    while d == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入第一个加数...')
        d = input ()
        if d != "":
            break
    print ('第一个加数值为：',d)
    time.sleep (1)
    print ('请输入第二个加数...')
    e = input ()
    e = int (e)
    while e == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入第二个加数...')
        e = input ()
        e = int (e)
        if e != "":
            break
    print ('第二个加数值为：',e)
    time.sleep (1)
    print ('正在运算...')
    f = random.randint(1,3)
    time.sleep (f)
    g = d + e
    print ('两个加数加起来的值为：',g)


def xf ():    #乘法,h,i,j,k
    print ('请输入第一个乘数...')
    h = input ()
    h = int (h)
    while h == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入第一个乘数...')
        h = input ()
        if h != "":
            break
    print ('第一个乘数值为：',h)
    time.sleep (1)
    print ('请输入第二个乘数...')
    i = input ()
    i = int (i)
    while i == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入第二个乘数...')
        i = input ()
        i = int (i)
        if i != "":
            break
    print ('第二个乘数值为：',i)
    time.sleep (1)
    print ('正在运算...')
    j = random.randint(1,3)
    time.sleep (j)
    k = h * i
    print ('两个乘数相乘的值为：',k)


def af ():    #减法,l,m,n,o
    print ('请输入被减数...')
    l = input ()
    l = int (l)
    while l == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入被减数数...')
        l = input ()
        if l != "":
            break
    print ('被减数值为：',l)
    time.sleep (1)
    print ('请输入减数...')
    m = input ()
    m = int (m)
    while m == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入减数...')
        m = input ()
        m = int (m)
        if m != "":
            break
    print ('减数值为：',m)
    time.sleep (1)
    print ('正在运算...')
    n = random.randint(1,3)
    time.sleep (n)
    o = l - m
    print ('两个数相减的值为：',o)


def cf ():    #除法,p,q,r,s
    print ('请输入被除数...')
    p = input ()
    p = int (p)
    while p == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入被除数...')
        p = input ()
        if p != "":
            break
    print ('被除数值为：',p)
    time.sleep (1)
    print ('请输入除数...')
    q = input ()
    q = int (q)
    while q == '':
        print ('请勿输入空数据！')
        time.sleep (1)
        print ('请输入除数...')
        q = input ()
        q = int (q)
        if q != "":
            break
    print ('第除数值为：',q)
    time.sleep (1)
    print ('正在运算...')
    r = random.randint(1,3)
    time.sleep (r)
    s = p / q
    print ('两个数相除的值为：',s)


csh ()
    
