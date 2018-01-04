import React from 'react'
import { Helmet } from 'react-helmet'
import './App.css'
import chart from './chart.png';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

var Range1 = require('react-range');

const Home = _ =>
    <div>
        <Helmet>
            <title>React Examples</title>
        </Helmet>
    </div>
const Button = _ =>
    <div>
        <Helmet>
            <title>Button</title>
        </Helmet>
    </div>
const Form = _ =>
    <div>
        <Helmet>
            <title>Form</title>
        </Helmet>
    </div>
const Lists = _ =>
    <div>
        <Helmet>
            <title>Lists</title>
        </Helmet>
    </div>
const Longdesc = _ =>
    <div>
        <Helmet>
            <title>Longdesc</title>
        </Helmet>
    </div>
const Range = _ =>
    <div>
        <Helmet>
            <title>Range</title>
        </Helmet>
    </div>
const Sections = _ =>
    <div>
        <Helmet>
            <title>Sections</title>
        </Helmet>
    </div>
const Tables = _ =>
    <div>
        <Helmet>
            <title>Tables</title>
        </Helmet>
    </div>

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div></div>,
        main: () =>
            <main role="main">
                <div id="Home">
                    <Home />
                    <h1>React Examples</h1>
                    {/*Component start */}
                    <p>
                        These React examples are a single page application that is deployed on GitHub. It was created using
            <a href="https://github.com/facebookincubator/create-react-app"> Create React App</a>.
            Select the link in the left navigation pane to view the example for each element. Accessibility test results are
            also included at the bottom of each example.
        </p>
                    <p>
                        To improve accessibility, the following have been added to the application:
            <ul>
                            <li>The <a href="https://github.com/nfl/react-helmet"> react-helmet</a> package to manage the page title.</li>
                            <li>The <a href="https://www.npmjs.com/package/react-range"> react-range</a> package to create the form slider.</li>
                            <li><a href="https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page">W3C WAI ARIA Landmarks </a>to identify regions to a page.</li>
                        </ul>
                        <hr className="hr" />
                        <h2>Other Available React ARIA Components</h2>
                        <ul>
                            <li><a href="https://github.com/davidtheclark/react-aria-modal">react-aria-modal</a></li>
                            <li><a href="https://github.com/davidtheclark/react-aria-menubutton">react-aria-menubutton</a></li>
                            <li><a href="https://github.com/davidtheclark/react-aria-tabpanel">react-aria-tabpanel</a></li>
                        </ul>
                        <h2>Additional Resources</h2>
                        <ul>
                            <li><a href="https://reactjs.org/docs/accessibility.html">React Accessibility</a></li>
                            <li><a href="https://reactjs.org/tutorial/tutorial.html">Tutuorial: Intro to React</a></li>
                            <li><a href="https://www.w3.org/WAI/tutorials/">W3C Web Accessibility Tutorials</a></li>
                        </ul>
                    </p>
                    {/*Component end */}
                </div>
            </main>
    },
    {
        path: '/button',
        sidebar: () => <div></div>,
        main: () => <div id="button">
            <div className="App">
                <main role="main">
                    <Button />
                    <h2 className="App-title">Button</h2>
                    {/* Component start */}
                    <form>
                        <label>
                            Name: &nbsp;
                <input type="text" name="name" />
                        </label>
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                    {/* Component end */}
                </main>
                <footer role="contentinfo">
                    <hr className="hr" />
                    <h3>Tested on:</h3>
                    <div>
                        <ul>
                            <li>Mac OS Sierra 10.12.6, Safari browser and VoiceOver are based on the Mac OS version.
                        <ul>
                                    <li>Results - VoiceOver announces: </li>
                                    <ul>
                                        <li>You are currently on the main inside web content.</li>
                                        <li>Heading level 2. Button. You are currently on heading level 2.</li>
                                        <li>Name. You are currently on a text element.</li>
                                        <li>Name. Edit text. You are currently on a text field. To enter this field, type.</li>
                                        <li>Submit button. You are currently on a button. To click this button, press Control-Option-Space.</li>
                                        <li>Pressed button, submit.</li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    },
    {
        path: '/form',
        sidebar: () => <div></div>,
        main: () => <div id="form">
            <div className="App">
                <main role="main">
                    <Form />
                    <h2 className="App-title">Form</h2>
                    {/* Component start */}
                    <div>
                        <p>Source credit: <a href="http://html5doctor.com/demos/forms/forms-example.html">HTML5 Doctor</a></p>
                        <form id="register">
                            <h3>Register for Miss Bakers Space Cadets</h3>
                            <fieldset>
                                <legend>Personal details</legend>
                                <div>
                                    <label>First Name &nbsp;
                        <input type="text" id="given-name" name="given-name" placeholder="First name only" required autofocus></input>
                                    </label>
                                </div>
                                <div>
                                    <label>Last Name &nbsp;
                        <input id="family-name" name="family-name" type="text" placeholder="Last name only" required autofocus></input>
                                    </label>
                                </div>
                                <div>
                                    <label>Birth Date &nbsp;
                        <label>Month &nbsp;
                                <Range1 className='number' onChange={this.handleOnChange} type='number'  min={1} max={12} />
                            </label>
                            <label>Day &nbsp;
                                <Range1 className='number' onChange={this.handleOnChange} type='number'  min={1} max={31}  />
                            </label>
                            <label>Year &nbsp;
                                <Range1 className='number' onChange={this.handleOnChange} type='number'  min={1900} max={2017}  />
                            </label>
                        </label>
                                </div>
                                <div>
                                    <label>Email &nbsp;
                        <input id="email" name="email" type="email" placeholder="example@domain.com" required></input>
                                    </label>
                                </div>
                                <div>
                                    <label>URL &nbsp;
                        <input id="url" name="url" type="url" placeholder="http://mysite.com"></input>
                                    </label>
                                </div>
                                <div>
                                    <label>Telephone &nbsp;
                        <input id="phone" name="phone" type="tel" placeholder="Eg. +447000 000000" required></input>
                                    </label>
                                </div>
                                <div>
                                    <label>Shoe Size &nbsp;
                                        <Range1 className='number' onChange={this.handleOnChange} type='number' value={9} min={5} max={18} step={0.5} />
                                    </label>
                                </div>
                                <div>
                                    <label>Flying Skill Level (1 low - 100 high)
                        <br />
                                        <Range1 className='slider' onChange={this.handleOnChange} type='range' value={20} min={0} max={100} />
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Billing Address</legend>
                                <div>
                                    <label>Address &nbsp;
                            <textarea id="address" name="address" rows="5" required></textarea>
                                    </label>
                                </div>
                                <div>
                                    <label>Postal Code &nbsp;
                            <input id="postCode" name="postCode" type="text" required></input>
                                    </label>
                                </div>
                                <div>
                                    <label label for="country-names">Country &nbsp;
                            <input id="country" name="country" list="country-names" type="text" required></input>
                                        <datalist id="country-names">
                                            <option label="England" value="England"></option>
                                            <option label="Northern Ireland" value="Northern Ireland"></option>
                                            <option label="Ireland" value="Ireland"></option>
                                            <option label="Scotland" value="Scotland"></option>
                                            <option label="Wales" value="Wales"></option>
                                        </datalist>
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Card Details</legend>
                                <fieldset>
                                    <legend>Card Type</legend>
                                    <div class="card-type">
                                        <input id="visa" name="cardtype" type="radio"></input>
                                        <label for="visa">VISA </label>
                                        <input id="mastercard" name="cardtype" type="radio"></input>
                                        <label for="mastercard">Mastercard </label>
                                        <input id="amex" name="cardtype" type="radio"></input>
                                        <label for="amex">AMEX </label>
                                    </div>
                                </fieldset>
                                <div>
                                    <label>Name &nbsp;
                            <input id="cardName" name="cardName" type="text" placeholder="Name as it appears on your card" required></input>
                                    </label>
                                </div>
                                <div>
                                    <label>Card number &nbsp;
                            <input id="cardNo" name="cardNo" type="number" required title="The sixteen digit number across the middle of your card."></input>
                                    </label>
                                </div>
                                <div>
                                    <label>Security Code &nbsp;
                            <input id="security" name="security" type="number" required pattern="[0-9]{3}" title="The last three digits on the back of your card."></input>
                                    </label>
                                </div>
                                <div>
                                    <label>Expiration Date &nbsp;
                            <input id="expiry" name="expiry" type="month"></input>
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Submit the Order</legend>
                                <div>
                                    <button type="submit">Place Order</button>
                                </div>
                            </fieldset>
                        </form>
                        {/* Component end */}
                    </div>
                </main>
                <footer role="contentinfo">
                    <hr className="hr" />
                    <h3>Tested on:</h3>
                    <div>
                        <ul>
                            <li>Mac OS Sierra 10.12.6, Safari browser and VoiceOver are based on the Mac OS version.
                        <ul>
                                    <li>Results - VoiceOver announces: </li>
                                    <ul>
                                        <li>Main 3 items. You are currently on the main inside web content.</li>
                                        <li>Each heading level, heading text and that you are currently on a heading level [number].</li>
                                        <li>The label for each form field and identifies it as a text element.</li>
                                        <li>Each text field as required, invalid data and the placeholder text.</li>
                                        <li>Each date field as required, invalid data. To enter the date, press Control - Option - Shift - Down Arrow.</li>
                                        <li>Shoe Size field as a stepper. To begin interacting with the stepper, press Control - Option - Shift - Down Arrow.</li>
                                        <li>Flying Skill Level one low one zero zero high as  slider. To begin interacting with the slider, press Control - Option - Shift - Down Arrow.</li>
                                        <li>Country field as a combo box. To display a list of choices, press Control - Option - Space.</li>
                                        <li>Card Type field as a radio button 1 of 3. To select the option press, press Control - Option - Space.</li>
                                        <li>Place Order button. To select the option press, press Control - Option - Space.</li>
                                        <li>End of main. To exit this area, press Control - Option - Up Arrow.</li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    },
    {
        path: '/lists',
        sidebar: () => <div></div>,
        main: () => <div id="lists">
            <div className="App">
                <main>
                    <Lists />
                    <h1 className="App-title">Lists</h1>
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
                    <h3>Tested on:</h3>
                    <div>
                        <ul>
                            <li>Mac OS Sierra 10.12.6, Safari browser and VoiceOver are based on the Mac OS version.
                    <ul>
                                    <li>Result - VoiceOver announces:
                          <ul>
                                            <li>Main 22 items. You are currently inside main inside web content.</li>
                                            <li>Each heading level, heading text, and that you are currently on a heading level [number].</li>
                                            <li>Each text field and text element.</li>
                                            <li>Assistive technology group. You are currently on a group. To interact with the items in this group press Control - Option - Shift - Down Arrow. (Note: the abbr tag broke up the sentence and VoiceOver announced it as a group.)</li>
                                            <li>Group Assistive Technology 1 item. You are currently on a group. To interact with this group press Control - Option - Right Arrow. Its You are currently on a text element. End of group. (Note: the abbr tag broke up the sentence and VoiceOver announced it as a group.)</li>
                                            <li>List 4 items. Heading level 3, UL. You are currently on a list.</li>
                                            <li>Bullet and list item are announced including position. (i.e. 1 of 4) and it is identified as a text element.</li>
                                            <li>List 3 items. Heading level 3, OL. You are currently on a list.</li>
                                            <li>The number and list item are announced including position. (i.e. 1 of 3) and it is identified as a text element.</li>
                                            <li>List 4 items. Heading level 3, definition list. You are currently on a definition list.</li>
                                            <li>The text of each list item is announced including position (i.e. 1 of 4) and it is identified as a text element.</li>
                                            <li>Heading level 3, Ingredients as a nested list. You are currently on a heading level 3.</li>
                                            <li>List 2 items. Heading level 3, list. You are currently on a list.</li>
                                            <li>Bullet of the first list item is announced including position (i.e. 1 of 2) and it is identified as a text element.</li>
                                            <li>The white bullet of the nested list items are announced including position (i.e. 1 of 3) and it is identified as a text element.</li>
                                            <li>End of List is announced after each nested list and then again for the entire list.</li>
                                            <li>List 2 items. Heading level 3, list. You are currently on a list.</li>
                                            <li>Number of the first list item is announced including position (i.e. 1 of 2) and it is identified as a text element.</li>
                                            <li>The number of the nested list items are announced including position (i.e. 1 of 3) and it is identified as a text element.</li>
                                            <li>End of List is announced after each nested list and then again for the entire list.</li>
                                            <li>List 3 items. Heading level 3, list. You are currently on a list.</li>
                                            <li>Bullet of the first list item is announced including position (i.e. 1 of 3) and it is identified as a text element.</li>
                                            <li>The number of the nested list items are announced including position (i.e. 1 of 4) and it is identified as a text element.</li>
                                            <li>End of List is announced after the nested list and then again for the entire list.</li>
                                            <li>End of main. To exit this area, press Control - Option - Up Arrow.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    },
    {
        path: '/longdesc',
        sidebar: () => <div></div>,
        main: () => <div id="longdesc">
            <div className="App">
                <main role="main">
                    <Longdesc />
                    <h2 className="App-title">Longdesc</h2>
                    {/* Component start */}
                    <div>
                        <p><img src={chart} alt="A complex chart" longdesc="#chartdesc" /></p>
                        <div id="chartdesc">
                            This is the long description for the example complex chart.  Your longdesc would contain a complete description
                of the complex graphic. Additional information on adding a long description is available on <a href="https://www.w3.org/WAI/tutorials/images/complex/#providing-a-link-to-the-long-description-via-longdesc">Complex Images from W3C.org</a>.
            </div>
                    </div>
                    {/* Component end */}
                </main>
                <footer role="contentinfo">
                    <hr className="hr" />
                    <h3>Tested on:</h3>
                    <div>
                        <ul>
                            <li>Mac OS Sierra 10.12.6, Safari browser and VoiceOver are based on the Mac OS version.
                        <ul>
                                    <li>Results - VoiceOver announces: </li>
                                    <ul>
                                        <li>Main 3 items. You are currently inside main inside web content.</li>
                                        <li>Heding level 2 Longdesc. You are currently on a heading level 2.</li>
                                        <li>A complex chart, image. You are currently on an image.</li>
                                        <li>Longdesc text and link text. You are currently on a link. To click the link, press Control - Option - Space.</li>
                                        <li>End of main. To exit this area, press Control - Option - Up Arrow.</li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    },
    {
        path: '/range',
        sidebar: () => <div></div>,
        main: () => <div id="range">
            <div className="App">
                <main role="main">
                    <Range />
                    <h2 className="App-title">Range</h2>
                    {/* Component start */}
                    <div>
                        <h3>The @mapbox/react-control-range package was installed to create this slider.</h3>
                        <p>The range is max = 100, min = 0, step = 10</p>
                        <Range1 className='slider' onChange={this.handleOnChange} type='range' value={20} min={0} max={100} step={10} />

                    </div>
                    {/* Component end */}
                </main>
                <footer role="contentinfo">
                    <hr className="hr" />
                    <h3>Tested on:</h3>
                    <div>
                        <ul>
                            <li>Mac OS Sierra 10.12.6, Safari browser and VoiceOver are based on the Mac OS version.
                        <ul>
                                    <li>Results - VoiceOver announces: </li>
                                    <ul>
                                        <li>Main 4 items. You are currently inside main inside web content.</li>
                                        <li>Each heading level, heading text, and that you are currently on a heading level [number].</li>
                                        <li>Paragraph text as a text element.</li>
                                        <li>20 slider. To start interacting with the slider press Control - Option - Shift - Down Arrow.</li>
                                        <li>In slider. (Note: Used Control - Option - Right Arrow or Left Arrow to move the slider and values were announced correctly. Pressed Control - Option - Shift - Up Arrow to exit slider.)</li>
                                        <li>End of main. To exit this area, press Control - Option - Up Arrow.</li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    },
    {
        path: '/sections',
        sidebar: () => <div></div>,
        main: () => <div id="sections">
            <div className="App">
                <main role="main">
                    <Sections />
                    <h2 className="App-title">Sections</h2>
                    {/* Component start */}
                    <section>
                        <h1>Sections used in an Outline</h1>
                        <section>
                            <h2>Introduction</h2>
                            <p>This is the introduction to the document.</p>
                        </section>
                        <section>
                            <h2>First Topic</h2>
                            <p>This is the content of the First Topic.</p>
                            <section>
                                <h3>Sub-section of the First Topic</h3>
                                <p>This is the content of the sub-section related to the first topic.</p>
                            </section>
                        </section>
                        <section>
                            <h2>Second Topic</h2>
                            <p>This is the content of the second topic.</p>
                            <section>
                                <h3>Sub-section of the Second Topic</h3>
                                <p>This is the content of the sub-section related to the Second topic.</p>
                            </section>
                        </section>
                        <aside>
                            <p>Aside element used to provide information or advertising relevant to the topic.</p>
                        </aside>
                    </section>
                    <footer>
                        <p>Footer element used to add copyright and author information.</p>
                    </footer>
                    {/* Component end */}
                </main>
                <footer role="contentinfo">
                    <hr className="hr" />
                    <h3>Tested on:</h3>
                    <div>
                        <ul>
                            <li>Mac OS Sierra 10.12.6, Safari browser and VoiceOver are based on the Mac OS version.
                        <ul>
                                    <li>Results - VoiceOver announces: </li>
                                    <ul>
                                        <li>Main 3 items. You are currently inside main inside web content.</li>
                                        <li>Each heading level, heading text, and that you are currently on a heading level [number].</li>
                                        <li>Paragraph text as a text element.</li>
                                        <li>Complementary 1 item. You are currently in complementary.</li>
                                        <li>End of Complementary.</li>
                                        <li>End of main. To exit this area, press Control - Option - Up Arrow.</li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    },
    {
        path: '/tables',
        sidebar: () => <div></div>,
        main: () => <div id="tables">
            <div className="App">
                <main role="main">
                    <Tables />
                    <h2 className="App-title">Tables</h2>
                    {/* Component start */}
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name </th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tom</td>
                                    <td>Thumb</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>James</td>
                                    <td>Sales</td>
                                    <td>11</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total Score</td>
                                    <td></td>
                                    <td>30</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    {/* Component end */}
                </main>
                <footer role="contentinfo">
                    <hr className="hr" />
                    <h3>Tested on:</h3>
                    <div>
                        <ul>
                            <li>Mac OS Sierra 10.12.6, Safari browser and VoiceOver are based on the Mac OS version.
                        <ul>
                                    <li>Results - VoiceOver announces: </li>
                                    <ul>
                                        <li>Main 3 items. You are currently inside main inside web content.</li>
                                        <li>Heading level 2 Tables. You are currently on a heading level 2.</li>
                                        <li>Table columns 5 rows. You are currently on a table. To navigate the cells with the table press Control - Option and then
                                        up Arrow, Down Arrow, Left Arrow or Right Arrow.
                                    </li>
                                        <li>Row number is announce when in the first column of a row. Then text in each cell is announce twice followed by the column number.</li>
                                        <li>End of table. You are currently on a table.</li>
                                        <li>End of main. To exit this area, press Control - Option - Up Arrow.</li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    }
]

const SidebarExample = () => (
    <Router>
        <div style={{ display: 'flex' }}>
            <div style={{
                padding: '10px',
                width: '20%',
                background: '#f0f0f0'
            }}>
                <nav>
                    <div><Link to="/">React Examples</Link></div>
                    <ul>
                        <li><Link to="/button">Button</Link></li>
                        <li><Link to="/form">Form</Link></li>
                        <li><Link to="/lists">Lists</Link></li>
                        <li><Link to="/longdesc">Longdesc</Link></li>
                        <li><Link to="/range">Range</Link></li>
                        <li><Link to="/sections">Sections</Link></li>
                        <li><Link to="/tables">Tables</Link></li>
                    </ul>
                </nav>
                {routes.map((route, index) => (
                    // You can render a <Route> in as many places
                    // as you want in your app. It will render along
                    // with any other <Route>s that also match the URL.
                    // So, a sidebar or breadcrumbs or anything else
                    // that requires you to render multiple things
                    // in multiple places at the same URL is nothing
                    // more than multiple <Route>s.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.sidebar}
                    />
                ))}
            </div>

            <div style={{ flex: 1, padding: '0', margin: '10' }}>
                {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
        </div>
    </Router>
)
export default SidebarExample
