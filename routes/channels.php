<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('messenger.{sender}.{receiver}', function ($user, $id) {
    return !is_null($user);
});

Broadcast::channel('group_chat.{roomId}', function ($user,$roomId) {
    if(true){
        return ['id' => $user->id, 'name' => $user->name];

    }
});

