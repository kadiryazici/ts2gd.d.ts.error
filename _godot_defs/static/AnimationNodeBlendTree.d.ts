
/**
 * This node may contain a sub-tree of any other blend type nodes, such as mix, blend2, blend3, one shot, etc. This is one of the most commonly used roots.
 *
*/
declare class AnimationNodeBlendTree extends AnimationRootNode  {

  
/**
 * This node may contain a sub-tree of any other blend type nodes, such as mix, blend2, blend3, one shot, etc. This is one of the most commonly used roots.
 *
*/
  new(): AnimationNodeBlendTree; 
  static "new"(): AnimationNodeBlendTree 


/** The global offset of all sub-nodes. */
graph_offset: Vector2;

/** Adds an [AnimationNode] at the given [code]position[/code]. The [code]name[/code] is used to identify the created sub-node later. */
add_node(name: string, node: AnimationNode, position?: Vector2): void;

/** Connects the output of an [AnimationNode] as input for another [AnimationNode], at the input port specified by [code]input_index[/code]. */
connect_node(input_node: string, input_index: int, output_node: string): void;

/** Disconnects the node connected to the specified input. */
disconnect_node(input_node: string, input_index: int): void;

/** Returns the sub-node with the specified [code]name[/code]. */
get_node(path: NodePathType): Node;

/** Returns the sub-node with the specified [code]name[/code]. */
get_node_unsafe<T extends Node>(path: NodePathType): T;


/** Returns the position of the sub-node with the specified [code]name[/code]. */
get_node_position(name: string): Vector2;

/** Returns [code]true[/code] if a sub-node with specified [code]name[/code] exists. */
has_node(name: string): boolean;

/** Removes a sub-node. */
remove_node(name: string): void;

/** Changes the name of a sub-node. */
rename_node(name: string, new_name: string): void;

/** Modifies the position of a sub-node. */
set_node_position(name: string, position: Vector2): void;

  connect<T extends SignalsOf<AnimationNodeBlendTree>>(signal: T, method: SignalFunction<AnimationNodeBlendTree[T]>): number;



/**
 * The connection was successful.
 *
*/
static CONNECTION_OK: any;

/**
 * The input node is `null`.
 *
*/
static CONNECTION_ERROR_NO_INPUT: any;

/**
 * The specified input port is out of range.
 *
*/
static CONNECTION_ERROR_NO_INPUT_INDEX: any;

/**
 * The output node is `null`.
 *
*/
static CONNECTION_ERROR_NO_OUTPUT: any;

/**
 * Input and output nodes are the same.
 *
*/
static CONNECTION_ERROR_SAME_NODE: any;

/**
 * The specified connection already exists.
 *
*/
static CONNECTION_ERROR_CONNECTION_EXISTS: any;



}

