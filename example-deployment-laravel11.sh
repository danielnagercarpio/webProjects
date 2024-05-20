#!/bin/sh
php artisan optimize
php artisan optimize:clear
php artisan config:cache
php artisan event:cache
php artisan route:cache
php artisan view:cache
npm run build
