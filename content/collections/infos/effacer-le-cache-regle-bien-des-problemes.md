---
id: d0381164-b1b6-4b9d-b187-a19e03e92193
blueprint: info
title: 'Effacer le cache regle bien des problèmes'
author: b357ad0e-1acf-4788-ba7d-7e1f18fcd7d0
template: infos/show
updated_by: b357ad0e-1acf-4788-ba7d-7e1f18fcd7d0
updated_at: 1712589199
---
- ## If you have command line access, the easiest way to clear the cache is to use please command.

BASH
php please clear:cache
If that’s not working for some reason, and you are using the File cache driver (if you don’t know what that means, then you are), you can manually delete the contents of local/storage/framework/cache. This is where Laravel stores any cached items. Clear this folder out, and the cache is gone.

You can also clear the cache from the Control Panel by going to any settings area and hitting save.