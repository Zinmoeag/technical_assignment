<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=> fake()->name(),
            'description' => fake()->paragraph(),
            'category_id' => rand(1,5),
            'item_condition' => rand(1,2),
            'item_type' => rand(1,3),
            'status' => rand(1,2),
            'photo' => 'path',
            'price' => 30000,
        ];
    }
}
