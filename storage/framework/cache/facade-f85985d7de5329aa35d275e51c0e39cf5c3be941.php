<?php

namespace Facades\Statamic\Auth;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Auth\CorePermissions
 */
class CorePermissions extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return 'Statamic\Auth\CorePermissions';
    }
}
