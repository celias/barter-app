SELECT * FROM favorites f
JOIN barters b ON b.product_id = f.prod_id WHERE users_id = $1;