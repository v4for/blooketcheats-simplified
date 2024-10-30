(() => {
    const cheat = async () => {
        const iframe = document.createElement('iframe');
        document.body.append(iframe);
        window.prompt = iframe.contentWindow.prompt.bind(window);
        iframe.remove();

        const gold = Number(prompt("How much gold would you like?"));
        const { stateNode } = Object.values(document.querySelector("body>div").children[0]._owner)[1];
        
        stateNode.setState({ gold, gold2: gold });
        stateNode.props.liveGameController.setVal({
            path: "c/" + stateNode.props.client.name,
            val: { b: stateNode.props.client.blook, g: gold }
        });
    };
