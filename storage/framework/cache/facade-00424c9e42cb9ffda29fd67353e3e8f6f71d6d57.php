<?php

namespace Facades\Statamic\View;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\View\Cascade
 */
class Cascade extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return 'Statamic\View\Cascade';
    }
}
