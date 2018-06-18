var timestamp = 0;

function renderTimestamp()
{
    timestamp++;
    postMessage(timestamp, "index.html");
    setTimeout(renderTimestamp, 1000);
}

renderTimestamp();