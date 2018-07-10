Vue.component('header-component',{
  template: `<div>
    <input type="checkbox" name="checkbox" id="checkbox_id" value="value">
      <label for="checkbox_id" class="has-background-danger has-text-white-ter has-text-centered">
        <a>
          <img src="https://buefy.github.io/static/img/buefy-light.7df103a.png" class="logo"/>
        </a>
        <a class="button is-danger is-inverted is-outlined is-pulled-right">
          <i class="fa fa-bars" aria-hidden="true"></i>      
        </a>
      </label>
      <div class="column item has-background-grey-lighter ">
        <ul class="no-decoration">
          <li><a href="#" class="button is-danger is-left"><i class="fa fa-home" aria-hidden="true"></i>&nbsp;home</a></li>
          <li><a href="#" class="button is-danger is-left"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;about us</a></li>     
          <li><a href="#" class="button is-danger is-left"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;clients</a></li>
          <li><a href="#" class="button is-danger is-left"><i class="fa fa-suitcase" aria-hidden="true"></i>&nbsp;careers</a></li>
          <li><a href="#" class="button is-danger is-left"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;contact</a></li>
        </ul>
      </div>
  </div>`
})

Vue.component('content-component', {
  template: `<div class="content">
    <div id="menu">
      <slot name="header"></slot>
      <slot name="card"></slot>
    </div>
  </div>`
})

Vue.component('card-component', {
  template: `<div class="column is-half is-offset-one-quarter">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>
        <div class="content">
          Keep the Web Simple!<br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2019-1-1">11:09 PM - 1 Jan 2019</time>
        </div>
      </div>
    </div>
  </div>`
})

Vue.component('footer-component', {
  template: `<footer class="has-background-danger has-text-white-ter">
    <div class="column has-text-centered ">It is awesome</div>
  </footer>`
})

var app = new Vue({
  el: '#app'
});