<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;

use App\Mail\contactmail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class contactuscontroller extends Controller
{
  
    public function sendemail(Request $request){
        $detalis=[
            'name'=>$request->name,
            'Company'=>$request->company,
            'email'=>$request->email,
            'massage'=>$request->msgg,
        ];
        Mail::to('malekaweden30@gmail.com')->send(new contactmail($detalis));
        return response()->json(['success'=>true]);
    }
}
