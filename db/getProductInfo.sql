SELECT * FROM barters b
JOIN users u ON b.user_id = u.id WHERE b.product_id = $1;