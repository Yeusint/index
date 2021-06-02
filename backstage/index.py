import time
import random
import function
print ('请等待3秒...')
time.sleep (3)
function.bj ()
print ('请输入接下来的操作...')
time.sleep (1)
print ('1.继续比较')
print ('2.加法运算')
print ('3.乘法运算')
print ('4.幂运算')
print ('5.减法运算')
print ('6.除法运算')
print ('7.整除运算')
time.sleep (1)
print ('只需要输入相应的编号即可')
z = input ()
print ('正在判断编号...')
time.sleep (3)
bh = {'1','2','3','4','5','6','7'}
while z not in bh:
  if z == '':
    print ('你输入了一个空数据！')
    time.sleep (1)
    print ('请重新输入数据！')
    time.sleep (1)
    print ('请输入接下来的操作...')
    z = input ()
    if z != '':
      break
  else:
    print ('编号不存在哦！')
    print ('o╥﹏╥o')
    print ('请重新输入数据！')
    print ('有效编号为1-10！')
    time.sleep (1)
    print ('1.继续比较')
    print ('2.加法运算')
    print ('3.乘法运算')
    print ('4.幂运算')
    print ('5.减法运算')
    print ('6.除法运算')
    print ('7.整除运算')
    print ('请选择')
    z = input ()
  if z in bh:
      break
print ("成功！您输入的编号是：",z)
print ('正在处理数据！')
time.sleep (random.randint(1,5))
print ('作者正在努力编写代码，尚未完成')
print ('请耐心等待哦')

  
  
  



