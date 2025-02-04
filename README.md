# Hi I am Kaustubh


**Expect nothing, but feel free to be disappointed.**

<div class="message-container">
    <div id="message" style="display: none;">
        Nothing Here
    </div>
    <button onclick="toggleMessage()" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; cursor: pointer; margin-top: 10px;">
        Click for Surprise!
    </button>
</div>

<script>
function toggleMessage() {
    const message = document.getElementById('message');
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
}
</script>

<style>
#message {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #f0f0f0;
}

button:hover {
    background-color: #45a049;
}
</style>
