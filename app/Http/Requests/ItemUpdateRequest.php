<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\ItemConditoin;
use App\Rules\ItemType;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rule;

class ItemUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return request()->user() != null;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'max:255',
            'description'  => 'max:255',
            'category_id'  => 'numeric|exists:categories,id',
            'price'  => 'numeric',
            'photo' => [
                'nullable',
                File::image()
                ->max('4mb')
                ->dimensions(Rule::dimensions()->maxWidth(400)->maxHeight(200)),
            ],
            'item_condition'  =>[new ItemConditoin],
            'item_type'  => [new ItemType],
            'status'  => 'boolean',
        ];
    }
}
