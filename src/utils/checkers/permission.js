export default data => {
    // User Permissions Check
    let user = data.userPermissions.user;
    let userPerms = data.userPermissions.perms;

    let userCheck;
    let botCheck;

    if(!userPerms.length) userCheck = true;
    else userCheck = user.permissions.has(userPerms);

    // Bot Permissions Check
    let bot = data.botPermissions.user;
    let botPerms = data.botPermissions.perms;

    if(!botPerms.length) botCheck = true;
    else botCheck = bot.permissions.has(botPerms);

    // Return the result
    return { user: userCheck, bot: botCheck };

}