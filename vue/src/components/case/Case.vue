<template>
  <div class='case'>
    <div class='case-casenotes'>
      <div class='casenotes-notelist'>
        <li class="notelist-item">
          <span class='notelist-title'> html </span>
          <span class='notelist-icon'> ⥁ </span>
        </li>
        <li class="notelist-item">
          <span class='notelist-title'> css </span>
          <span class='notelist-icon'> ⥁ </span>
        </li>
        <li class="notelist-item">
          <span class='notelist-title'> js </span>
          <span class='notelist-icon'> ⥁ </span>
        </li>
      </div>
      <div class='casenotes-noteview'>
        <div class='noteview-previous'> ∧ </div>
        <img class='noteview-image' src='../../assets/logo.png'></img>
        <div class='noteview-title'>Docker</div>
        <div class='noteview-next'> ∨ </div>
      </div>
    </div>
    <div class='case-caseinfo'>
      <h1 class='caseinfo-name'>CASE NAME</h1>
      <p class='caseinfo-summary'>summary lorem ipsum dolor sit amet</p>
    </div>
    <div class='case-casebutton'>
      <img class='casebutton-button' src='../../assets/chevron.png'> </img>
    </div>
  </div>
</template>

<style>
   .case {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    background: #ddd;
  }

  .case > * {
    padding: 10px;
  }

  .case-caseinfo { flex-grow: 1; }
  .case-casenotes { display: flex; }

  .casenotes-notelist, .casenotes-noteview {
    height: 100%;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .casenotes-notelist {
    padding: 10px 0;
  }

  .casenotes-noteview {
    align-items: center;
  }

  .casenotes-noteview > * {
    margin: 5px 0;
  }

  .casenotes-notelist {
    align-items: flex-end;
  }

  .notelist-title {
    margin-right: 10px;
    align-items: flex-end;
    font-size: 1.4rem;
  }

  .noteview-image {
    width: 100px;
  }

  .case-casebutton {
    height: 100%;
    margin: auto 10px;
  }

  .casebutton-button {
    width: 35px;
  }
  
</style>
