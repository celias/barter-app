
UPDATE users 
SET (profile_img, nick_name, bio, location, mediums, barters, wants) = ($1, $2, $3, $4, $5, $6, $7)
WHERE authid = $8;
