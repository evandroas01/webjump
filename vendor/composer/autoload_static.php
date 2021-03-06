<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6670b8a3356500ec8cfd559bb188ec6c
{
    public static $files = array (
        '5a01e0d06fc8cf6045515d1f342177dc' => __DIR__ . '/../..' . '/source/Config.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Source\\' => 7,
        ),
        'C' => 
        array (
            'CoffeeCode\\Router\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Source\\' => 
        array (
            0 => __DIR__ . '/../..' . '/source',
        ),
        'CoffeeCode\\Router\\' => 
        array (
            0 => __DIR__ . '/..' . '/coffeecode/router/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6670b8a3356500ec8cfd559bb188ec6c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6670b8a3356500ec8cfd559bb188ec6c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit6670b8a3356500ec8cfd559bb188ec6c::$classMap;

        }, null, ClassLoader::class);
    }
}
