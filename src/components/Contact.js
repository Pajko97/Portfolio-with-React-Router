import React from 'react';

const Contact = () => {
  return (
    <div class="contact">
    <h1>Say hello</h1>
    <form>
        <input type="text" placeholder="Your name" id="name-field"/>
        <input type="text" placeholder="Your email" id="mail-field"/>
        <textarea placeholder="Your message :)" id="message-field"></textarea>
        <button>Submit</button>
    </form>
</div>
  );
};

export default Contact;