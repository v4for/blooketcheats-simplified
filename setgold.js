(() => {
    const cheat = async () => {
        // Create an iframe to safely override prompt
        const iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        const originalPrompt = window.prompt;
        window.prompt = iframe.contentWindow.prompt.bind(window);

        // Prompt the user for the amount of gold
        const gold = Number(window.prompt("How much gold would you like?"));
        
        // Restore the original prompt
        window.prompt = originalPrompt;
        iframe.remove();

        // Access the state node of the game
        const { stateNode } = Object.values(document.querySelector("body > div").children[0]._owner)[1];
        
        // Update the state and the live game controller
        stateNode.setState({ gold, gold2: gold });
        stateNode.props.liveGameController.setVal({
            path: "c/" + stateNode.props.client.name,
            val: { b: stateNode.props.client.blook, g: gold }
        });
    };

    cheat();
})();
