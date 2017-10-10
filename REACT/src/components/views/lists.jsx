import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div id="lists">
        <div className="App">
        <header className="App-header" role = "banner">
          <nav>
              <a href="../index.html">Home</a> > <a href="./home">React Examples</a>
          </nav>
          <hr className="hr" />
        </header>
        <main>
        <h1 className="App-title">React Lists</h1> 
        {/* Component start */} 
        <p>This page provides a variety of lists to test proper behaviour with browsers and
            <abbr title="assistive technologies"> ATs</abbr>.</p>
        <h2>Single Level</h2>
        <h3>UL</h3> The first list demonstrates an unsorted list. A peculiarity of UL and OL is that nothing normally goes inside the list tags except list items. If you place anything inside a UL or OL but not within the LI structure, it is still indented, like this use of the phrase "three fruit". Most
        <abbr title="assistive technologies"> ATs</abbr> will treat the phrase "three fruit" as part of the list, and may even label the list using this text, although that isn't part of the specification.
        <ul>
            three fruit
            <li>bananas</li>
            <li>apples</li>
            <li>oranges</li>
        </ul>
        <h3>OL</h3> The second list demonstrates an enumerated list. I'll give you three reasons you use this:
        <ol>
            <li>you want to indicate sequence</li>
            <li>you want to rank or otherwise indicate order</li>
            <li>you like numbers better than bullets, even though, as with this list, the numbering is pretty arbitrary</li>
        </ol>
        <h3>DL</h3> A definition list should be used exclusively for structuring definitions. Unlike the other lists, it consists of a three-part structure. There is the DL, which indicates the beginning and end of a definition list. Unlike OL and UL, text inside the DL but outside the inner tags is not immediately indented.
        <dl>
            <dt>DT or Definition Term</dt>
            <dd>The Term is the word or phrase being defined</dd>
            <dt>DD, or Definition Description</dt>
            <dd>The DD describes the term. In this example DL, there are two sets of terms and descriptions.</dd>
        </dl>
        <h2>Nested lists</h2> With a nested list, a new UL or OL is put inside an existing UL or OL. As with simple lists, the user agent will handle indentation and bullet variations.
        <h3>Ingredients as nested list</h3>
        <ul>
            <li>Wet
                <ul>
                    <li>Eggs</li>
                    <li>Milk</li>
                </ul>
            </li>
            <li>Dry
                <ul>
                    <li>Flour</li>
                    <li>Sugar</li>
                    <li>Salt</li>
                </ul>
            </li>
        </ul>
        <h3>Instructions as nested list</h3>
        <ol>
            <li>Mix dry ingredients
                <ol>
                    <li>Put 1 cup flour in bowl</li>
                    <li>Add 1 Tbsp sugar</li>
                    <li>Ad 1 tsp salt and mix</li>
                </ol>
            </li>
            <li>Mix wet ingredients
                <ol>
                    <li>Measure 1 cup milk</li>
                    <li>Add a egg and blend</li>
                </ol>
            </li>
            <li>Add wet ingredients into dry ingredients</li>
        </ol>
        <h3>Unordered tasks with ordered tasks nested</h3>
        <ul>
            <li>Rake the yard</li>
            <li>Wash the clothes
                <ol>
                    <li>Sort the clothes</li>
                    <li>Set the washing machine correctly</li>
                    <li>Add the detergent</li>
                    <li>Start the machine</li>
                </ol>
            </li>
            <li>Buy the groceries</li>
        </ul>   
        {/* Component end */}
        </main>
        <footer role="contentinfo">
        <hr className="hr" />
        {/* Enter any references or sources using the format example below. 
             If this is an original code sample you can just add link to GitHub: line below
        */}
        <h3>Source:</h3> 
        <a href="https://ibma.github.io/Va11yS/React/lists.html" target="_blank" rel="noopener noreferrer">Source code on GitHub</a>
        {/*  Enter testing results:  OS, Browser, AT used, and result */}
        <h3>Tested on:</h3>
        <div>
            <ul>
              <li>Mac OS Sierra 10.12.6, Safari browser and VoiceOver are based on the Mac OS version.
                    <ul>
                        <li>Result - VoiceOver announces: 
                          <ul>
                            <li>Main 22 items. You are currently inside main inside web content.</li>
                            <li>Heading level 1. React lists. You are currently on a heading level 1.</li>
                            <li>This page provides a variety of lists to test proper behavior with browsers and. You are currently on a text element.</li>
                            <li>Assistive technology group. You are currently on a group. To interact with the items in this group press Control - Option - Shift - Down Arrow. (Note: the abbr tag broke up the sentence and VoiceOver announced it as a group.)</li>
                            <li>Period. You are currently on a text statement.</li>
                            <li>Heading level 2, Single Level. You are currently on a heading level 2.</li>
                            <li>Heading level 3, UL. You are currently on a heading level 3.</li>
                            <li>Paragraph is announced as text elements.</li>
                            <li>Group Assistive Technology 1 item. You are currently on a group. To interact with this group press Control - Option - Right Arrow. Its You are currently on a text element. End of group. (Note: the abbr tag broke up the sentence and VoiceOver announced it as a group.)</li>
                            <li>List 4 items. Heading level 3, UL. You are currently on a list.</li>
                            <li>Bullet and list item are announced including position. (i.e. 1 of 4) and it is identified as a text element.</li> 
                            <li>End of List.</li>
                            <li>Heading level 3, OL. You are currently on a heading level 3.</li>
                            <li>Paragraph is announced as a text element.</li>
                            <li>List 3 items. Heading level 3, OL. You are currently on a list.</li>
                            <li>The number and list item are announced including position. (i.e. 1 of 3) and it is identified as a text element.</li>
                            <li>End of List.</li>
                            <li>Heading level 3, DL. You are currently on a heading level 3.</li>
                            <li>Paragraph is announced as text element.</li>
                            <li>List 4 items. Heading level 3, definition list. You are currently on a definition list.</li> 
                            <li>The text of each list item is announced including position (i.e. 1 of 4) and it is identified as a text element.</li> 
                            <li>End of List.</li> 
                            <li>Heading level 2, Nested lists. You are currently on a heading level 2.</li>
                            <li>Paragraph is announced as text element.</li>
                            <li>Heading level 3, Ingredients as a nested list. You are currently on a heading level 3.</li>
                            <li>List 2 items. Heading level 3, list. You are currently on a list.</li>
                            <li>Bullet of the first list item is announced including position (i.e. 1 of 2) and it is identified as a text element.</li> 
                            <li>The white bullet of the nested list items are announced including position (i.e. 1 of 3) and it is identified as a text element.</li> 
                            <li>End of List is announced after each nested list and then again for the entire list.</li> 
                            <li>Heading level 3, Instructions as a nested list. You are currently on a heading level 3.</li>
                            <li>List 2 items. Heading level 3, list. You are currently on a list.</li>
                            <li>Number of the first list item is announced including position (i.e. 1 of 2) and it is identified as a text element.</li>
                            <li>The number of the nested list items are announced including position (i.e. 1 of 3) and it is identified as a text element.</li> 
                            <li>End of List is announced after each nested list and then again for the entire list.</li>
                            <li>Heading level 3, Unordered tasks with ordered tasks nested. You are currently on a heading level 3.</li>
                            <li>List 3 items. Heading level 3, list. You are currently on a list.</li>
                            <li>Bullet of the first list item is announced including position (i.e. 1 of 3) and it is identified as a text element.</li>
                            <li>The number of the nested list items are announced including position (i.e. 1 of 4) and it is identified as a text element.</li>
                            <li>End of List is announced after the nested list and then again for the entire list.</li>
                          </ul>
                        </li>
                     </ul>
                </li>
            </ul>
        </div>
        </footer>
      </div>           
      </div>
    );
  }
}