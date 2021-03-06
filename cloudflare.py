import sys
import requests

def main():
    args = sys.argv
    headers = {
        'Content-Type': 'application/json',
        'X-Auth-Email': args[2],
        'X-Auth-Key': args[3]
    }
    url = 'https://api.cloudflare.com/client/v4/zones/' + args[1] + '/purge_cache'
    res = requests.delete(url, headers=headers, json={"purge_everything": True}).json()
    print('success: {}'.format(res['success']))
    sys.exit(0 if res['success'] else 1)


if __name__ == '__main__':
    main()
