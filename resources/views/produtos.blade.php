@extends('master')

@section('content')
    <div id="app"> <!-- Use uma div com o ID "app" para montar o Vue.js -->
        <Produtos-view></Produtos-view>
        <Produtos-list></Produtos-list>
    </div>
@endsection
