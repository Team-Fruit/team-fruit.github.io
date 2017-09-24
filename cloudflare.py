import sys
import requests


def main():
    args = sys.argv
    for line in args:
        print(line)
    headers = {
        'Content-Type': 'application/json',
        'X-Auth-Email': args[2],
        'X-Auth-Key': args[3]
    }
    url = 'https://api.cloudflare.com/client/v4/zones/' + args[1] + '/settings/development_mode'
    print(requests.patch(url, headers=headers, json={"value": "on"}).json())


if __name__ == '__main__':
    main()
