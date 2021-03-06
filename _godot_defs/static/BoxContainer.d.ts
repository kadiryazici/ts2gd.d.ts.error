
/**
 * Arranges child controls vertically or horizontally, and rearranges the controls automatically when their minimum size changes.
 *
*/
declare class BoxContainer extends Container  {

  
/**
 * Arranges child controls vertically or horizontally, and rearranges the controls automatically when their minimum size changes.
 *
*/
  new(): BoxContainer; 
  static "new"(): BoxContainer 


/** The alignment of the container's children (must be one of [constant ALIGN_BEGIN], [constant ALIGN_CENTER] or [constant ALIGN_END]). */
alignment: int;


/** Adds a control to the box as a spacer. If [code]true[/code], [code]begin[/code] will insert the spacer control in front of other children. */
add_spacer(begin: boolean): void;

  connect<T extends SignalsOf<BoxContainer>>(signal: T, method: SignalFunction<BoxContainer[T]>): number;



/**
 * Aligns children with the beginning of the container.
 *
*/
static ALIGN_BEGIN: any;

/**
 * Aligns children with the center of the container.
 *
*/
static ALIGN_CENTER: any;

/**
 * Aligns children with the end of the container.
 *
*/
static ALIGN_END: any;



}

