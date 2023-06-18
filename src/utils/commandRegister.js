export default client => {
    const commands = client.commands.map(command => command.slash_data)
    client.application.commands.set(commands).then(() => {
        console.log("Commands saved!")
    })
}