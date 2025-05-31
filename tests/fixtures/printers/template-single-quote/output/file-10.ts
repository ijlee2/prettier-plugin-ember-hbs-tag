const template = hbs`
  <div
    data-test-field='😀😀route🎉🎉'
    class={{local styles 'message' 'highlight'}}
  >
    {{@model.message}}
  </div>

  <div class={{styles.message}} data-test-field='controller'>😀 -
    {{@controller.someField}}
    - 🎉!</div>

  <div data-test-field='component'>
    {{this.someGetter}}
  </div>
`;

render(hbs`
  <div
    data-test-field='😀😀route🎉🎉'
    class={{local styles 'message' 'highlight'}}
  >
    {{@model.message}}
  </div>

  <div class={{styles.message}} data-test-field='controller'>
    😀 -
    {{@controller.someField}}
    - 🎉!
  </div>

  <div data-test-field='component'>
    {{this.someGetter}}
  </div>
`);

const template = a`    <div
  data-test-field="😀😀route🎉🎉"
  class={{
    local styles "message" "highlight"
  }}>
      {{@model.message}}
    </div>

    <div class={{styles.message}} data-test-field="controller">😀 - {{@controller.someField}} - 🎉!</div>

    <div data-test-field="component">
      {{this.someGetter}}
</div> `;

render(a`    <div  data-test-field="😀😀route🎉🎉"
class={{local styles "message" "highlight"}}>
    {{@model.message}}
  </div>

    <div
     class={{styles.message}} data-test-field="controller"
     >
     😀 - {{@controller.someField}} - 🎉!
     </div>

    <div data-test-field="component">
      {{this.someGetter}}
  </div>

  `);
