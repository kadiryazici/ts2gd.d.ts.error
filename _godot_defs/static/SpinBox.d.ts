
/**
 * SpinBox is a numerical input text field. It allows entering integers and floats.
 *
 * **Example:**
 *
 * @example 
 * 
 * var spin_box = SpinBox.new()
 * add_child(spin_box)
 * var line_edit = spin_box.get_line_edit()
 * line_edit.context_menu_enabled = false
 * spin_box.align = LineEdit.ALIGN_RIGHT
 * @summary 
 * 
 *
 * The above code will create a [SpinBox], disable context menu on it and set the text alignment to right.
 *
 * See [Range] class for more options over the [SpinBox].
 *
 * **Note:** [SpinBox] relies on an underlying [LineEdit] node. To theme a [SpinBox]'s background, add theme items for [LineEdit] and customize them.
 *
*/
declare class SpinBox extends Range  {

  
/**
 * SpinBox is a numerical input text field. It allows entering integers and floats.
 *
 * **Example:**
 *
 * @example 
 * 
 * var spin_box = SpinBox.new()
 * add_child(spin_box)
 * var line_edit = spin_box.get_line_edit()
 * line_edit.context_menu_enabled = false
 * spin_box.align = LineEdit.ALIGN_RIGHT
 * @summary 
 * 
 *
 * The above code will create a [SpinBox], disable context menu on it and set the text alignment to right.
 *
 * See [Range] class for more options over the [SpinBox].
 *
 * **Note:** [SpinBox] relies on an underlying [LineEdit] node. To theme a [SpinBox]'s background, add theme items for [LineEdit] and customize them.
 *
*/
  new(): SpinBox; 
  static "new"(): SpinBox 


/** Sets the text alignment of the [SpinBox]. */
align: int;

/** If [code]true[/code], the [SpinBox] will be editable. Otherwise, it will be read only. */
editable: boolean;

/** Adds the specified [code]prefix[/code] string before the numerical value of the [SpinBox]. */
prefix: string;

/** Adds the specified [code]suffix[/code] string after the numerical value of the [SpinBox]. */
suffix: string;

/** Applies the current value of this [SpinBox]. */
apply(): void;

/**
 * Returns the [LineEdit] instance from this [SpinBox]. You can use it to access properties and methods of [LineEdit].
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_line_edit(): LineEdit;

  connect<T extends SignalsOf<SpinBox>>(signal: T, method: SignalFunction<SpinBox[T]>): number;






}

