<?php

namespace App\Utilities;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;


class ImageResize 
{

    public function __construct (private $width, private $height)
    {
    }

    public function resizeAndStore($rootFile, $path)
    {
        $photo = ImageManager::imagick()->read(Storage::get($rootFile.$path));

        dd($photo);

        // overwirte
        Storage::put($rootFile.$path,$photo);
    }
}