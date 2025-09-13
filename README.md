### This repository is suppose to work in pair with `3x-UI` panel, guide step-by-step:
1. Create `certbot_challenge` folder inside this repository;
2. Run a container with `dummy_sni` with current configuration;
3. Get SSL certificates with certbot in `etc/letsencrypt` for your domain via 80 port;
4. Change `nginx.conf` file with your actual domain name in `server_name` and with your path to certificate and certificate_key in `etc/letsencrypt`;
5. Clone `3x-UI` repository and **create `./x-ui-data` folder first** there with volume mounting to `/etc/x-ui` inside 3x-UI container, also with mounting your `/etc/letsencrypt` to `/etc/letsencrypt` in a container to use panel with HTTPS;
7. Create only one inbound on `443` port with all your clients for this inbound and make fallback to local website on port `8443` OR just sync this configuration from your another server (for this goal we are creating `x-ui-data` as well);
8. Configure `ufw` to allow only 80, 443 and your customm SSH tcp port publicly with 8443 and panel port only from 127.0.0.1;
9. Create inside `certbot_challenge` persistent `.well-known` folder with `acme-challenge` folder and there `health.txt` with some text, for example `All good!` to check with Load Balancer via HTTP that your server is healthy.

**Always change domain of your keys from panel to your actual domain cuz by default they will be as localhost cuz we will use it from local host with Port Forwarding!**
