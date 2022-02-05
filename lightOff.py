import asyncio
from kasa import SmartBulb

#enter IP here
ip = ""

bulb = SmartBulb(ip)
asyncio.run(bulb.update())

asyncio.run(bulb.turn_off())
asyncio.run(bulb.update())

if bulb.is_dimmable:
    print(bulb.brightness)
    