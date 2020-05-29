from bottle import route, run, template, static_file
import subprocess
import json

# @route('/assets/images/<filename>')
# def send_static(filename):
#     return static_file(filename, root='./concept-master/assets/images/')
@route('/')
def index():
    return template('./concept-master/index',data=containersList())
@route('/containers')
def containersList():
    name = subprocess.Popen('lxc-ls -F NAME -f | tail -n +2', shell=True, stdout=subprocess.PIPE)
    name = name.stdout.read().decode('utf-8').split('\n')

    state = subprocess.Popen('lxc-ls -F STATE -f | tail -n +2', shell=True, stdout=subprocess.PIPE)
    state = state.stdout.read().decode('utf-8').split('\n')

    autostart = subprocess.Popen('lxc-ls -F AUTOSTART -f | tail -n +2', shell=True, stdout=subprocess.PIPE)
    autostart = autostart.stdout.read().decode('utf-8').split('\n')

    groups = subprocess.Popen('lxc-ls -F GROUPS -f | tail -n +2', shell=True, stdout=subprocess.PIPE)
    groups = groups.stdout.read().decode('utf-8').split('\n')

    ipv4 = subprocess.Popen('lxc-ls -F IPV4 -f | tail -n +2', shell=True, stdout=subprocess.PIPE)
    ipv4 = ipv4.stdout.read().decode('utf-8').split('\n')

    ipv6 = subprocess.Popen('lxc-ls -F IPV6 -f | tail -n +2', shell=True, stdout=subprocess.PIPE)
    ipv6 = ipv6.stdout.read().decode('utf-8').split('\n')

    unprivileged = subprocess.Popen('lxc-ls -F UNPRIVILEGED -f | tail -n +2', shell=True, stdout=subprocess.PIPE)
    unprivileged = unprivileged.stdout.read().decode('utf-8').split('\n')

    data = {"Servers":{}}
    for i in range(len(name)-1):
        data_tmp = {
            "name": name[i].strip(),
            "state": str(state[i]).strip(),
            "autostart": str(autostart[i]).strip(),
            "groups": str(groups[i]).strip(),
            "ipv4": str(ipv4[i]).strip(),
            "ipv6": str(ipv6[i]).strip(),
            "unprivileged": str(unprivileged[i]).strip(),
        }
        data["Servers"][name[i].strip()] = data_tmp
    for x in data["Servers"]:
        print(data["Servers"][x]["state"])

    return data

@route('/<filename:path>')
def send_static(filename):
    return static_file(filename, root='./concept-master')


run(host='localhost', port=80)