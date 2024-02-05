<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemOwnerUpdateRequest extends FormRequest
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
            'owner_name'  => 'max:255',
            'owner_phone'  => 'max:20',
            'owner_address' => 'max:255',
            'owner_location' => 'array',
        ];
    }
}
