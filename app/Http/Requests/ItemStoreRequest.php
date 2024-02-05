<?php

namespace App\Http\Requests;

use App\Rules\ItemConditoin;
use App\Rules\ItemType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rule;

class ItemStoreRequest extends FormRequest
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
            'name' => 'required|max:255',
            'description'  => 'required|max:255',
            'category_id'  => 'required|numeric|exists:categories,id',
            'price'  => 'required|numeric',
            'photo' => [
                'required',
                File::image()
                ->max('4mb')
                ->dimensions(Rule::dimensions()->maxWidth(400)->maxHeight(200)),
            ],
            'item_condition'  => ['required', new ItemConditoin],
            'item_type'  => ['required', new ItemType],
            'status'  => 'required|boolean',
            'owner_name'  => 'required|max:255',
            'owner_phone'  => 'required|max:20',
            'owner_address' => 'required|max:255',
            'owner_location' => 'array',
        ];
    }
}
