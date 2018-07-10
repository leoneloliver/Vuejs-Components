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
      <slot name="body"></slot>
    </div>
  </div>`
})

Vue.component('body-component',{
  template: `<div class="column is-half is-offset-one-quarter">
      <div class="column">
        <h3 class="has-text-centered has-text-grey">Menu only CSS</h3>
      </div>
      <div class="column has-background-grey-lighter has-text-centered ">
        <img src="https://via.placeholder.com/350x350" />
      </div>
      <div class="column">
        Keep the web simple. 
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