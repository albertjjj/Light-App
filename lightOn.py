#192.168.86.53
import asyncio
from kasa import SmartBulb

bulb = SmartBulb("192.168.86.126")
asyncio.run(bulb.update())

asyncio.run(bulb.turn_on())
#asyncio.run(bulb.update())

if bulb.is_dimmable:
    print(bulb.brightness)
    