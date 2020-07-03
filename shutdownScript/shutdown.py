import os
from datetime import datetime, timedelta
import time


def shutdownScript():
    return os.system("shutdown /s")


def checkTime():
    shutdown_time = 0
    timecheck = datetime.now()
    current_time = {}
    for attr in ['hour', 'minute']:
        current_time[attr] = getattr(timecheck, attr)

    print(timecheck)

    current_time_value = current_time['hour'] + current_time['minute']

    print(current_time_value)

    if current_time_value == shutdown_time:
        return False
    return True


while checkTime():
    time.sleep(3)

shutdownScript()
