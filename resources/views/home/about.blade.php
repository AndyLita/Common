@extends('layouts.master')

@section('content')
	<?php
	//echo('about from home folder');
	echo($greeting.$whom);
	?>
	<br/>
	{{'hello'}}
@endsection