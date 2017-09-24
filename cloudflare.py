import sys
import requests

def main():
    args = sys.argv
    headers = {
        'Content-Type': 'application/json',
        'X-Auth-Email': args[2],
        'X-Auth-Key': args[3]
    }
    url = 'https://api.cloudflare.com/client/v4/zones/' + args[1] + '/settings/development_mode'
    res = requests.patch(url, headers=headers, json={"value": "on"}).json()
    if res['success']:
        sys.exit(0)

if __name__ == '__main__':
    main()
