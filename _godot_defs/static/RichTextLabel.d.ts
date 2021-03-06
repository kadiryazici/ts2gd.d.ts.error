
/**
 * Rich text can contain custom text, fonts, images and some basic formatting. The label manages these as an internal tag stack. It also adapts itself to given width/heights.
 *
 * **Note:** Assignments to [member bbcode_text] clear the tag stack and reconstruct it from the property's contents. Any edits made to [member bbcode_text] will erase previous edits made from other manual sources such as [method append_bbcode] and the `push_*` / [method pop] methods.
 *
 * **Note:** RichTextLabel doesn't support entangled BBCode tags. For example, instead of using `**bold**bold italic**italic**`, use `**bold**bold italic******italic**`.
 *
 * **Note:** `push_pop` functions won't affect BBCode.
 *
 * **Note:** Unlike [Label], RichTextLabel doesn't have a **property** to horizontally align text to the center. Instead, enable [member bbcode_enabled] and surround the text in a `[center]` tag as follows: `[center]Example[/center]`. There is currently no built-in way to vertically align text either, but this can be emulated by relying on anchors/containers and the [member fit_content_height] property.
 *
 * **Note:** Unicode characters after `0xffff` (such as most emoji) are **not** supported on Windows. They will display as unknown characters instead. This will be resolved in Godot 4.0.
 *
*/
declare class RichTextLabel extends Control  {

  
/**
 * Rich text can contain custom text, fonts, images and some basic formatting. The label manages these as an internal tag stack. It also adapts itself to given width/heights.
 *
 * **Note:** Assignments to [member bbcode_text] clear the tag stack and reconstruct it from the property's contents. Any edits made to [member bbcode_text] will erase previous edits made from other manual sources such as [method append_bbcode] and the `push_*` / [method pop] methods.
 *
 * **Note:** RichTextLabel doesn't support entangled BBCode tags. For example, instead of using `**bold**bold italic**italic**`, use `**bold**bold italic******italic**`.
 *
 * **Note:** `push_pop` functions won't affect BBCode.
 *
 * **Note:** Unlike [Label], RichTextLabel doesn't have a **property** to horizontally align text to the center. Instead, enable [member bbcode_enabled] and surround the text in a `[center]` tag as follows: `[center]Example[/center]`. There is currently no built-in way to vertically align text either, but this can be emulated by relying on anchors/containers and the [member fit_content_height] property.
 *
 * **Note:** Unicode characters after `0xffff` (such as most emoji) are **not** supported on Windows. They will display as unknown characters instead. This will be resolved in Godot 4.0.
 *
*/
  new(): RichTextLabel; 
  static "new"(): RichTextLabel 


/**
 * If `true`, the label uses BBCode formatting.
 *
 * **Note:** Trying to alter the [RichTextLabel]'s text with [method add_text] will reset this to `false`. Use instead [method append_bbcode] to preserve BBCode formatting.
 *
*/
bbcode_enabled: boolean;

/**
 * The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.
 *
 * **Note:** It is unadvised to use the `+=` operator with `bbcode_text` (e.g. `bbcode_text += "some string"`) as it replaces the whole text and can cause slowdowns. Use [method append_bbcode] for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.
 *
*/
bbcode_text: string;

/**
 * The currently installed custom effects. This is an array of [RichTextEffect]s.
 *
 * To add a custom effect, it's more convenient to use [method install_effect].
 *
*/
custom_effects: any[];

/**
 * If `true`, the label's height will be automatically updated to fit its content.
 *
 * **Note:** This property is used as a workaround to fix issues with [RichTextLabel] in [Container]s, but it's unreliable in some cases and will be removed in future versions.
 *
*/
fit_content_height: boolean;

/** If [code]true[/code], the label underlines meta tags such as [code][url]{text}[/url][/code]. */
meta_underlined: boolean;

/** If [code]true[/code], the label uses the custom font color. */
override_selected_font_color: boolean;

/**
 * The range of characters to display, as a [float] between 0.0 and 1.0. When assigned an out of range value, it's the same as assigning 1.0.
 *
 * **Note:** Setting this property updates [member visible_characters] based on current [method get_total_character_count].
 *
*/
percent_visible: float;


/** If [code]true[/code], the scrollbar is visible. Setting this to [code]false[/code] does not block scrolling completely. See [method scroll_to_line]. */
scroll_active: boolean;

/** If [code]true[/code], the window scrolls down to display new content automatically. */
scroll_following: boolean;

/** If [code]true[/code], the label allows text selection. */
selection_enabled: boolean;

/** The number of spaces associated with a single tab length. Does not affect [code]\t[/code] in text tags, only indent tags. */
tab_size: int;

/**
 * The raw text of the label.
 *
 * When set, clears the tag stack and adds a raw text tag to the top of it. Does not parse BBCodes. Does not modify [member bbcode_text].
 *
*/
text: string;

/**
 * The restricted number of characters to display in the label. If `-1`, all characters will be displayed.
 *
 * **Note:** Setting this property updates [member percent_visible] based on current [method get_total_character_count].
 *
*/
visible_characters: int;

/**
 * Adds an image's opening and closing tags to the tag stack, optionally providing a `width` and `height` to resize the image.
 *
 * If `width` or `height` is set to 0, the image size will be adjusted in order to keep the original aspect ratio.
 *
*/
add_image(image: Texture, width?: int, height?: int): void;

/** Adds raw non-BBCode-parsed text to the tag stack. */
add_text(text: string): void;

/**
 * Parses `bbcode` and adds tags to the tag stack as needed. Returns the result of the parsing, [constant OK] if successful.
 *
 * **Note:** Using this method, you can't close a tag that was opened in a previous [method append_bbcode] call. This is done to improve performance, especially when updating large RichTextLabels since rebuilding the whole BBCode every time would be slower. If you absolutely need to close a tag in a future method call, append the [member bbcode_text] instead of using [method append_bbcode].
 *
*/
append_bbcode(bbcode: string): int;

/** Clears the tag stack and sets [member bbcode_text] to an empty string. */
clear(): void;

/** Returns the height of the content. */
get_content_height(): int;

/** Returns the total number of newlines in the tag stack's text tags. Considers wrapped text as one line. */
get_line_count(): int;

/** Returns the total number of characters from text tags. Does not include BBCodes. */
get_total_character_count(): int;

/**
 * Returns the vertical scrollbar.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_v_scroll(): VScrollBar;

/** Returns the number of visible lines. */
get_visible_line_count(): int;

/** Installs a custom effect. [code]effect[/code] should be a valid [RichTextEffect]. */
install_effect(effect: any): void;

/** Adds a newline tag to the tag stack. */
newline(): void;

/** The assignment version of [method append_bbcode]. Clears the tag stack and inserts the new content. Returns [constant OK] if parses [code]bbcode[/code] successfully. */
parse_bbcode(bbcode: string): int;

/** Parses BBCode parameter [code]expressions[/code] into a dictionary. */
parse_expressions_for_values(expressions: PoolStringArray): Dictionary<any, any>;

/** Terminates the current tag. Use after [code]push_*[/code] methods to close BBCodes manually. Does not need to follow [code]add_*[/code] methods. */
pop(): void;

/** Adds an [code][align][/code] tag based on the given [code]align[/code] value. See [enum Align] for possible values. */
push_align(align: int): void;

/** Adds a [code][font][/code] tag with a bold font to the tag stack. This is the same as adding a [code][b][/code] tag if not currently in a [code][i][/code] tag. */
push_bold(): void;

/** Adds a [code][font][/code] tag with a bold italics font to the tag stack. */
push_bold_italics(): void;

/** Adds a [code][cell][/code] tag to the tag stack. Must be inside a [code][table][/code] tag. See [method push_table] for details. */
push_cell(): void;

/** Adds a [code][color][/code] tag to the tag stack. */
push_color(color: Color): void;

/** Adds a [code][font][/code] tag to the tag stack. Overrides default fonts for its duration. */
push_font(font: Font): void;

/** Adds an [code][indent][/code] tag to the tag stack. Multiplies [code]level[/code] by current [member tab_size] to determine new margin length. */
push_indent(level: int): void;

/** Adds a [code][font][/code] tag with a italics font to the tag stack. This is the same as adding a [code][i][/code] tag if not currently in a [code][b][/code] tag. */
push_italics(): void;

/** Adds a [code][list][/code] tag to the tag stack. Similar to the BBCodes [code][ol][/code] or [code][ul][/code], but supports more list types. Not fully implemented! */
push_list(type: int): void;

/** Adds a [code][meta][/code] tag to the tag stack. Similar to the BBCode [code][url=something]{text}[/url][/code], but supports non-[String] metadata types. */
push_meta(data: any): void;

/** Adds a [code][font][/code] tag with a monospace font to the tag stack. */
push_mono(): void;

/** Adds a [code][font][/code] tag with a normal font to the tag stack. */
push_normal(): void;

/** Adds a [code][s][/code] tag to the tag stack. */
push_strikethrough(): void;

/** Adds a [code][table=columns][/code] tag to the tag stack. */
push_table(columns: int): void;

/** Adds a [code][u][/code] tag to the tag stack. */
push_underline(): void;

/**
 * Removes a line of content from the label. Returns `true` if the line exists.
 *
 * The `line` argument is the index of the line to remove, it can take values in the interval `[0, get_line_count() - 1]`.
 *
*/
remove_line(line: int): boolean;

/** Scrolls the window's top line to match [code]line[/code]. */
scroll_to_line(line: int): void;

/**
 * Edits the selected column's expansion options. If `expand` is `true`, the column expands in proportion to its expansion ratio versus the other columns' ratios.
 *
 * For example, 2 columns with ratios 3 and 4 plus 70 pixels in available width would expand 30 and 40 pixels, respectively.
 *
 * If `expand` is `false`, the column will not contribute to the total ratio.
 *
*/
set_table_column_expand(column: int, expand: boolean, ratio: int): void;

  connect<T extends SignalsOf<RichTextLabel>>(signal: T, method: SignalFunction<RichTextLabel[T]>): number;



/**
 * Makes text left aligned.
 *
*/
static ALIGN_LEFT: any;

/**
 * Makes text centered.
 *
*/
static ALIGN_CENTER: any;

/**
 * Makes text right aligned.
 *
*/
static ALIGN_RIGHT: any;

/**
 * Makes text fill width.
 *
*/
static ALIGN_FILL: any;

/**
 * Each list item has a number marker.
 *
*/
static LIST_NUMBERS: any;

/**
 * Each list item has a letter marker.
 *
*/
static LIST_LETTERS: any;

/**
 * Each list item has a filled circle marker.
 *
*/
static LIST_DOTS: any;

/** No documentation provided. */
static ITEM_FRAME: any;

/** No documentation provided. */
static ITEM_TEXT: any;

/** No documentation provided. */
static ITEM_IMAGE: any;

/** No documentation provided. */
static ITEM_NEWLINE: any;

/** No documentation provided. */
static ITEM_FONT: any;

/** No documentation provided. */
static ITEM_COLOR: any;

/** No documentation provided. */
static ITEM_UNDERLINE: any;

/** No documentation provided. */
static ITEM_STRIKETHROUGH: any;

/** No documentation provided. */
static ITEM_ALIGN: any;

/** No documentation provided. */
static ITEM_INDENT: any;

/** No documentation provided. */
static ITEM_LIST: any;

/** No documentation provided. */
static ITEM_TABLE: any;

/** No documentation provided. */
static ITEM_FADE: any;

/** No documentation provided. */
static ITEM_SHAKE: any;

/** No documentation provided. */
static ITEM_WAVE: any;

/** No documentation provided. */
static ITEM_TORNADO: any;

/** No documentation provided. */
static ITEM_RAINBOW: any;

/** No documentation provided. */
static ITEM_CUSTOMFX: any;

/** No documentation provided. */
static ITEM_META: any;


/**
 * Triggered when the user clicks on content between meta tags. If the meta is defined in text, e.g. `[url={"data"="hi"}]hi[/url]`, then the parameter for this signal will be a [String] type. If a particular type or an object is desired, the [method push_meta] method must be used to manually insert the data into the tag stack.
 *
*/
$meta_clicked: Signal<(meta: any) => void>

/**
 * Triggers when the mouse exits a meta tag.
 *
*/
$meta_hover_ended: Signal<(meta: any) => void>

/**
 * Triggers when the mouse enters a meta tag.
 *
*/
$meta_hover_started: Signal<(meta: any) => void>

}

