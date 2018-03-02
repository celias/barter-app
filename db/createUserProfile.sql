INSERT INTO users (bio, nick_name, email, mediums, profile_img, barters)
VALUES ($1, $2, $3, $4, $5, $6) RETURNING bio, nick_name, email, mediums, profile_img, barters;