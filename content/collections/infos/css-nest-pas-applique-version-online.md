---
id: 52592777-01f3-4c93-aa0f-360703230ed5
blueprint: info
title: "CSS n'est pas appliqué version online"
author: b357ad0e-1acf-4788-ba7d-7e1f18fcd7d0
template: infos/show
updated_by: b357ad0e-1acf-4788-ba7d-7e1f18fcd7d0
updated_at: 1712590001
---
- ## Si vous **deployer** votre site web Statamic online et que le **CSS n'est pas appliqué**.
L'une des raisons possible est que le Statamic va chercher ses sources vers les urls HTTP par defaut. Alors que le site lui est HTTPS. Ajouter ce code dans le fichier AppServiceProvider.php

```
    /**
     Bootstrap any application services.
     */
    public function boot(): void
    {
        if (env('APP_ENV') !== 'local') {
            URL::forceScheme('https');
        }
    }
```