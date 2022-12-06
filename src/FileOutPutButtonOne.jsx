const FileOutPutButtonOne = (props) => {
  if (props.ContentTarget === undefined || props.ContentTarget.length === 0);
  let F = "";
  let G = "";
  let H = "";

  const FileProcessTwo = () => {
    let Z = props.ContentTarget.current.value;

    const Function1 = () => {
      F = Z.replaceAll(
        `["stone_slab_type_3":"andesite","top_slot_bit":false]`,
        "3"
      )
        .replaceAll(`["stone_slab_type_3":"andesite","top_slot_bit":true]`, "3")
        .replaceAll(`["stone_slab_type_3":"diorite","top_slot_bit":false]`, "4")
        .replaceAll(`["stone_slab_type_3":"diorite","top_slot_bit":true]`, "4")
        .replaceAll(
          `["stone_slab_type_3":"end_stone_brick","top_slot_bit":false]`,
          "0"
        )
        .replaceAll(
          `["stone_slab_type_3":"end_stone_brick","top_slot_bit":true]`,
          "0"
        )
        .replaceAll(`["stone_slab_type_3":"granite","top_slot_bit":false]`, "6")
        .replaceAll(`["stone_slab_type_3":"granite","top_slot_bit":true]`, "6")
        .replaceAll(
          `["stone_slab_type_3":"polished_andesite","top_slot_bit":false]`,
          "2"
        )
        .replaceAll(
          `["stone_slab_type_3":"polished_andesite","top_slot_bit":true]`,
          "2"
        )
        .replaceAll(
          `["stone_slab_type_3":"polished_diorite","top_slot_bit":false]`,
          "5"
        )
        .replaceAll(
          `["stone_slab_type_3":"polished_diorite","top_slot_bit":true]`,
          "5"
        )
        .replaceAll(
          `["stone_slab_type_3":"polished_granite","top_slot_bit":false]`,
          "7"
        )
        .replaceAll(
          `["stone_slab_type_3":"polished_granite","top_slot_bit":true]`,
          "7"
        )
        .replaceAll(
          `["stone_slab_type_3":"smooth_red_sandstone","top_slot_bit":false]`,
          "1"
        )
        .replaceAll(
          `["stone_slab_type_3":"smooth_red_sandstone","top_slot_bit":true]`,
          "1"
        )
        .replaceAll(`["age":0,"direction":0]`, "0")
        .replaceAll(`["age":0]`, "0")
        .replaceAll(`["age":10]`, "10")
        .replaceAll(`["age":11]`, "11")
        .replaceAll(`["age":12]`, "12")
        .replaceAll(`["age":13]`, "13")
        .replaceAll(`["age":14]`, "14")
        .replaceAll(`["age":15]`, "15")
        .replaceAll(`["age":1]`, "1")
        .replaceAll(`["age":2,"direction":0]`, "0")
        .replaceAll(`["age":2,"direction":1]`, "1")
        .replaceAll(`["age":2,"direction":2]`, "2")
        .replaceAll(`["age":2,"direction":3]`, "3")
        .replaceAll(`["age":2]`, "2")
        .replaceAll(`["age":3]`, "3")
        .replaceAll(`["age":4]`, "4")
        .replaceAll(`["age":5]`, "5")
        .replaceAll(`["age":6]`, "6")
        .replaceAll(`["age":7]`, "7")
        .replaceAll(`["age":8]`, "8")
        .replaceAll(`["age":9]`, "9")
        .replaceAll(
          `["age_bit":false,"bamboo_leaf_size":"large_leaves","bamboo_stalk_thickness":"thick"]`,
          "2"
        )
        .replaceAll(
          `["age_bit":false,"bamboo_leaf_size":"large_leaves","bamboo_stalk_thickness":"thin"]`,
          "1"
        )
        .replaceAll(
          `["age_bit":false,"bamboo_leaf_size":"no_leaves","bamboo_stalk_thickness":"thick"]`,
          "2"
        )
        .replaceAll(
          `["age_bit":false,"bamboo_leaf_size":"no_leaves","bamboo_stalk_thickness":"thin"]`,
          "1"
        )
        .replaceAll(
          `["age_bit":false,"bamboo_leaf_size":"small_leaves","bamboo_stalk_thickness":"thick"]`,
          "2"
        )
        .replaceAll(
          `["age_bit":false,"bamboo_leaf_size":"small_leaves","bamboo_stalk_thickness":"thin"]`,
          "1"
        )
        .replaceAll(`["age_bit":false,"sapling_type":"acacia"]`, "4")
        .replaceAll(`["age_bit":false,"sapling_type":"birch"]`, "2")
        .replaceAll(`["age_bit":false,"sapling_type":"dark_oak"]`, "5")
        .replaceAll(`["age_bit":false,"sapling_type":"jungle"]`, "3")
        .replaceAll(`["age_bit":false,"sapling_type":"oak"]`, "0")
        .replaceAll(`["age_bit":false,"sapling_type":"spruce"]`, "1")
        .replaceAll(
          `["age_bit":true,"bamboo_leaf_size":"large_leaves","bamboo_stalk_thickness":"thick"]`,
          "2"
        )
        .replaceAll(
          `["age_bit":true,"bamboo_leaf_size":"large_leaves","bamboo_stalk_thickness":"thin"]`,
          "1"
        )
        .replaceAll(
          `["age_bit":true,"bamboo_leaf_size":"no_leaves","bamboo_stalk_thickness":"thick"]`,
          "2"
        )
        .replaceAll(
          `["age_bit":true,"bamboo_leaf_size":"no_leaves","bamboo_stalk_thickness":"thin"]`,
          "1"
        )
        .replaceAll(
          `["age_bit":true,"bamboo_leaf_size":"small_leaves","bamboo_stalk_thickness":"thick"]`,
          "2"
        )
        .replaceAll(
          `["age_bit":true,"bamboo_leaf_size":"small_leaves","bamboo_stalk_thickness":"thin"]`,
          "1"
        )
        .replaceAll(`["age_bit":true,"sapling_type":"acacia"]`, "4")
        .replaceAll(`["age_bit":true,"sapling_type":"birch"]`, "2")
        .replaceAll(`["age_bit":true,"sapling_type":"dark_oak"]`, "5")
        .replaceAll(`["age_bit":true,"sapling_type":"jungle"]`, "3")
        .replaceAll(`["age_bit":true,"sapling_type":"oak"]`, "0")
        .replaceAll(`["age_bit":true,"sapling_type":"spruce"]`, "1")
        .replaceAll(`["allow_underwater_bit":false,"explode_bit":false]`, "0")
        .replaceAll(
          `["attached_bit":false,"direction":0,"powered_bit":false]`,
          "0"
        )
        .replaceAll(
          `["attached_bit":false,"direction":1,"powered_bit":false]`,
          "1"
        )
        .replaceAll(
          `["attached_bit":false,"direction":2,"powered_bit":false]`,
          "2"
        )
        .replaceAll(
          `["attached_bit":false,"direction":3,"powered_bit":false]`,
          "3"
        )
        .replaceAll(
          `["attached_bit":false,"disarmed_bit":false,"powered_bit":false,"suspended_bit":false]`,
          "0"
        )
        .replaceAll(
          `["attached_bit":false,"disarmed_bit":false,"powered_bit":false,"suspended_bit":true]`,
          "1"
        )
        .replaceAll(
          `["attachment":"hanging","direction":0,"toggle_bit":false]`,
          "0"
        )
        .replaceAll(
          `["attachment":"hanging","direction":1,"toggle_bit":false]`,
          "1"
        )
        .replaceAll(
          `["attachment":"hanging","direction":2,"toggle_bit":false]`,
          "2"
        )
        .replaceAll(
          `["attachment":"hanging","direction":3,"toggle_bit":false]`,
          "3"
        )
        .replaceAll(
          `["attachment":"side","direction":0,"toggle_bit":false]`,
          "0"
        )
        .replaceAll(`["attachment":"side","direction":0]`, "0")
        .replaceAll(
          `["attachment":"side","direction":1,"toggle_bit":false]`,
          "1"
        )
        .replaceAll(`["attachment":"side","direction":1]`, "1")
        .replaceAll(
          `["attachment":"side","direction":2,"toggle_bit":false]`,
          "2"
        )
        .replaceAll(`["attachment":"side","direction":2]`, "2")
        .replaceAll(
          `["attachment":"side","direction":3,"toggle_bit":false]`,
          "3"
        )
        .replaceAll(`["attachment":"side","direction":3]`, "3")
        .replaceAll(`["attachment":"standing","direction":0]`, "0")
        .replaceAll(`["attachment":"standing","direction":1]`, "1")
        .replaceAll(
          `["attachment":"standing","direction":2,"toggle_bit":false]`,
          "2"
        )
        .replaceAll(`["attachment":"standing","direction":2]`, "2")
        .replaceAll(
          `["attachment":"standing","direction":3,"toggle_bit":false]`,
          "3"
        )
        .replaceAll(`["attachment":"standing","direction":3]`, "3")
        .replaceAll(
          `["big_dripleaf_head":false,"big_dripleaf_tilt":"none","direction":0]`,
          "0"
        )
        .replaceAll(
          `["big_dripleaf_head":false,"big_dripleaf_tilt":"none","direction":1]`,
          "1"
        )
        .replaceAll(
          `["big_dripleaf_head":false,"big_dripleaf_tilt":"none","direction":2]`,
          "2"
        )
        .replaceAll(
          `["big_dripleaf_head":false,"big_dripleaf_tilt":"none","direction":3]`,
          "3"
        )
        .replaceAll(`["bite_counter":0]`, "0")
        .replaceAll(`["bite_counter":1]`, "1")
        .replaceAll(`["bite_counter":2]`, "2")
        .replaceAll(`["bite_counter":3]`, "3")
        .replaceAll(`["block_light_level":0]`, "0")
        .replaceAll(`["block_light_level":10]`, "10")
        .replaceAll(`["block_light_level":11]`, "11")
        .replaceAll(`["block_light_level":12]`, "12")
        .replaceAll(`["block_light_level":13]`, "13")
        .replaceAll(`["block_light_level":14]`, "14")
        .replaceAll(`["block_light_level":15]`, "15")
        .replaceAll(`["block_light_level":1]`, "1")
        .replaceAll(`["block_light_level":2]`, "2")
        .replaceAll(`["block_light_level":3]`, "3")
        .replaceAll(`["block_light_level":4]`, "4")
        .replaceAll(`["block_light_level":5]`, "5")
        .replaceAll(`["block_light_level":6]`, "6")
        .replaceAll(`["block_light_level":7]`, "7")
        .replaceAll(`["block_light_level":8]`, "8")
        .replaceAll(`["block_light_level":9]`, "9")
        .replaceAll(
          `["brewing_stand_slot_a_bit":false,"brewing_stand_slot_b_bit":false,"brewing_stand_slot_c_bit":false]`,
          "0"
        )
        .replaceAll(`["button_pressed_bit":false,"facing_direction":0]`, "0")
        .replaceAll(`["button_pressed_bit":false,"facing_direction":1]`, "1")
        .replaceAll(`["button_pressed_bit":false,"facing_direction":2]`, "2")
        .replaceAll(`["button_pressed_bit":false,"facing_direction":3]`, "3")
        .replaceAll(`["button_pressed_bit":false,"facing_direction":4]`, "4")
        .replaceAll(`["button_pressed_bit":false,"facing_direction":5]`, "5")
        .replaceAll(`["candles":0,"lit":false]`, "0")
        .replaceAll(`["candles":0,"lit":true]`, "0")
        .replaceAll(`["candles":1,"lit":false]`, "1")
        .replaceAll(`["candles":1,"lit":true]`, "1")
        .replaceAll(`["candles":2,"lit":false]`, "2")
        .replaceAll(`["candles":2,"lit":true]`, "2")
        .replaceAll(`["candles":3,"lit":false]`, "3")
        .replaceAll(`["candles":3,"lit":true]`, "3")
        .replaceAll(`["candles":4,"lit":false]`, "4")
        .replaceAll(`["candles":4,"lit":true]`, "4")
        .replaceAll(`["cauldron_liquid":"lava","fill_level":0]`, "0")
        .replaceAll(`["cauldron_liquid":"lava","fill_level":1]`, "1")
        .replaceAll(`["cauldron_liquid":"lava","fill_level":2]`, "2")
        .replaceAll(`["cauldron_liquid":"lava","fill_level":3]`, "3")
        .replaceAll(`["cauldron_liquid":"lava","fill_level":4]`, "4")
        .replaceAll(`["cauldron_liquid":"lava","fill_level":5]`, "5")
        .replaceAll(`["cauldron_liquid":"lava","fill_level":6]`, "6")
        .replaceAll(`["cauldron_liquid":"water","fill_level":0]`, "0")
        .replaceAll(`["cauldron_liquid":"water","fill_level":1]`, "1")
        .replaceAll(`["cauldron_liquid":"water","fill_level":2]`, "2")
        .replaceAll(`["cauldron_liquid":"water","fill_level":3]`, "3")
        .replaceAll(`["cauldron_liquid":"water","fill_level":4]`, "4")
        .replaceAll(`["cauldron_liquid":"water","fill_level":5]`, "5")
        .replaceAll(`["cauldron_liquid":"water","fill_level":6]`, "6")
        .replaceAll(`["chisel_type":"chiseled","pillar_axis":"x"]`, "1")
        .replaceAll(`["chisel_type":"chiseled","pillar_axis":"y"]`, "1")
        .replaceAll(`["chisel_type":"chiseled","pillar_axis":"z"]`, "1")
        .replaceAll(`["chisel_type":"default","pillar_axis":"x"]`, "0")
        .replaceAll(`["chisel_type":"default","pillar_axis":"y"]`, "0")
        .replaceAll(`["chisel_type":"default","pillar_axis":"z"]`, "0")
        .replaceAll(`["chisel_type":"lines","pillar_axis":"x"]`, "2")
        .replaceAll(`["chisel_type":"lines","pillar_axis":"y"]`, "2")
        .replaceAll(`["chisel_type":"lines","pillar_axis":"z"]`, "2")
        .replaceAll(`["chisel_type":"smooth","pillar_axis":"x"]`, "3")
        .replaceAll(`["chisel_type":"smooth","pillar_axis":"y"]`, "3")
        .replaceAll(`["chisel_type":"smooth","pillar_axis":"z"]`, "3")
        .replaceAll(`["cluster_count":0,"dead_bit":false]`, "0")
        .replaceAll(`["cluster_count":0,"dead_bit":true]`, "0")
        .replaceAll(`["cluster_count":1,"dead_bit":false]`, "1")
        .replaceAll(`["cluster_count":1,"dead_bit":true]`, "1")
        .replaceAll(`["cluster_count":2,"dead_bit":false]`, "2")
        .replaceAll(`["cluster_count":2,"dead_bit":true]`, "2")
        .replaceAll(`["cluster_count":3,"dead_bit":false]`, "3")
        .replaceAll(`["cluster_count":3,"dead_bit":true]`, "3")
        .replaceAll(`["color":"black"]`, "15")
        .replaceAll(`["color":"blue"]`, "11")
        .replaceAll(`["color":"brown"]`, "12")
        .replaceAll(`["color":"cyan"]`, "9")
        .replaceAll(`["color":"gray"]`, "7")
        .replaceAll(`["color":"green"]`, "13")
        .replaceAll(`["color":"lightblue"]`, "3")
        .replaceAll(`["color":"light_blue"]`, "3")
        .replaceAll(`["color":"lime"]`, "5")
        .replaceAll(`["color":"magenta"]`, "2")
        .replaceAll(`["color":"orange"]`, "1")
        .replaceAll(`["color":"pink"]`, "6")
        .replaceAll(`["color":"purple"]`, "10")
        .replaceAll(`["color":"red"]`, "14")
        .replaceAll(`["color":"silver"]`, "8")
        .replaceAll(`["color":"white"]`, "0")
        .replaceAll(`["color":"yellow"]`, "4")
        .replaceAll(`["composter_fill_level":0]`, "0")
        .replaceAll(`["composter_fill_level":1]`, "1")
        .replaceAll(`["composter_fill_level":2]`, "2")
        .replaceAll(`["composter_fill_level":3]`, "3")
        .replaceAll(`["composter_fill_level":4]`, "4")
        .replaceAll(`["composter_fill_level":5]`, "5")
        .replaceAll(`["composter_fill_level":6]`, "6")
        .replaceAll(`["composter_fill_level":7]`, "7")
        .replaceAll(`["composter_fill_level":8]`, "8")
        .replaceAll(`["conditional_bit":false,"facing_direction":0]`, "0")
        .replaceAll(`["conditional_bit":false,"facing_direction":1]`, "1")
        .replaceAll(`["conditional_bit":false,"facing_direction":2]`, "2")
        .replaceAll(`["conditional_bit":false,"facing_direction":3]`, "3")
        .replaceAll(`["conditional_bit":false,"facing_direction":4]`, "4")
        .replaceAll(`["conditional_bit":false,"facing_direction":5]`, "5")
        .replaceAll(`["conditional_bit":true,"facing_direction":0]`, "0")
        .replaceAll(`["conditional_bit":true,"facing_direction":1]`, "1")
        .replaceAll(`["conditional_bit":true,"facing_direction":2]`, "2")
        .replaceAll(`["conditional_bit":true,"facing_direction":3]`, "3")
        .replaceAll(`["conditional_bit":true,"facing_direction":4]`, "4")
        .replaceAll(`["conditional_bit":true,"facing_direction":5]`, "5")
        .replaceAll(`["coral_color":"blue","coral_fan_direction":0]`, "0")
        .replaceAll(`["coral_color":"blue","dead_bit":false]`, "0")
        .replaceAll(`["coral_color":"blue","dead_bit":true]`, "0")
        .replaceAll(`["coral_color":"pink","coral_fan_direction":0]`, "1")
        .replaceAll(`["coral_color":"pink","dead_bit":false]`, "1")
        .replaceAll(`["coral_color":"pink","dead_bit":true]`, "1")
        .replaceAll(`["coral_color":"purple","coral_fan_direction":0]`, "2")
        .replaceAll(`["coral_color":"purple","dead_bit":false]`, "2")
        .replaceAll(`["coral_color":"purple","dead_bit":true]`, "2")
        .replaceAll(`["coral_color":"red","coral_fan_direction":0]`, "3")
        .replaceAll(`["coral_color":"red","dead_bit":false]`, "3")
        .replaceAll(`["coral_color":"red","dead_bit":true]`, "3")
        .replaceAll(`["coral_color":"yellow","coral_fan_direction":0]`, "4")
        .replaceAll(`["coral_color":"yellow","dead_bit":false]`, "4")
        .replaceAll(`["covered_bit":false,"height":0]`, "0")
        .replaceAll(`["covered_bit":false,"height":1]`, "1")
        .replaceAll(`["covered_bit":false,"height":2]`, "2")
        .replaceAll(`["covered_bit":false,"height":3]`, "3")
        .replaceAll(`["covered_bit":false,"height":4]`, "4")
        .replaceAll(`["covered_bit":false,"height":5]`, "5")
        .replaceAll(`["covered_bit":false,"height":6]`, "6")
        .replaceAll(`["covered_bit":false,"height":7]`, "7")
        .replaceAll(
          `["cracked_state":"no_cracks","turtle_egg_count":"four_egg"]`,
          "4"
        )
        .replaceAll(
          `["cracked_state":"no_cracks","turtle_egg_count":"one_egg"]`,
          "1"
        )
        .replaceAll(
          `["cracked_state":"no_cracks","turtle_egg_count":"three_egg"]`,
          "3"
        )
        .replaceAll(
          `["cracked_state":"no_cracks","turtle_egg_count":"two_egg"]`,
          "2"
        )
        .replaceAll(`["damage":"broken","direction":0]`, "0")
        .replaceAll(`["damage":"broken","direction":1]`, "1")
        .replaceAll(`["damage":"broken","direction":2]`, "2")
        .replaceAll(`["damage":"broken","direction":3]`, "3")
        .replaceAll(`["damage":"slightly_damaged","direction":0]`, "0")
        .replaceAll(`["damage":"slightly_damaged","direction":1]`, "1")
        .replaceAll(`["damage":"slightly_damaged","direction":2]`, "2")
        .replaceAll(`["damage":"slightly_damaged","direction":3]`, "3")
        .replaceAll(`["damage":"undamaged","direction":0]`, "0")
        .replaceAll(`["damage":"undamaged","direction":1]`, "1")
        .replaceAll(`["damage":"undamaged","direction":2]`, "2")
        .replaceAll(`["damage":"undamaged","direction":3]`, "3")
        .replaceAll(`["damage":"very_damaged","direction":0]`, "0")
        .replaceAll(`["damage":"very_damaged","direction":1]`, "1")
        .replaceAll(`["damage":"very_damaged","direction":2]`, "2")
        .replaceAll(`["damage":"very_damaged","direction":3]`, "3")
        .replaceAll(`["deprecated":0,"pillar_axis":"x"]`, "0")
        .replaceAll(`["deprecated":0,"pillar_axis":"y"]`, "0")
        .replaceAll(`["deprecated":0,"pillar_axis":"z"]`, "0")
        .replaceAll(`["deprecated":1,"pillar_axis":"x"]`, "1")
        .replaceAll(`["deprecated":1,"pillar_axis":"y"]`, "1")
        .replaceAll(`["deprecated":1,"pillar_axis":"z"]`, "1")
        .replaceAll(`["deprecated":2,"pillar_axis":"x"]`, "2")
        .replaceAll(`["deprecated":2,"pillar_axis":"y"]`, "2")
        .replaceAll(`["deprecated":2,"pillar_axis":"z"]`, "2")
        .replaceAll(`["deprecated":3,"pillar_axis":"x"]`, "3")
        .replaceAll(`["deprecated":3,"pillar_axis":"y"]`, "3")
        .replaceAll(`["deprecated":3,"pillar_axis":"z"]`, "3")
        .replaceAll(
          `["direction":0,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "0"
        )
        .replaceAll(
          `["direction":0,"door_hinge_bit":false,"open_bit":true,"upper_block_bit":false]`,
          "0"
        )
        .replaceAll(
          `["direction":0,"door_hinge_bit":false,"open_bit":true,"upper_block_bit":true]`,
          "0"
        )
        .replaceAll(
          `["direction":0,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "0"
        )
        .replaceAll(`["direction":0,"end_portal_eye_bit":true]`, "0")
        .replaceAll(`["direction":0,"extinguished":false]`, "0")
        .replaceAll(`["direction":0,"extinguished":true]`, "0")
        .replaceAll(
          `["direction":0,"head_piece_bit":true,"occupied_bit":false]`,
          "0"
        )
        .replaceAll(`["direction":0,"honey_level":0]`, "0")
        .replaceAll(`["direction":0,"honey_level":5]`, "0")
        .replaceAll(`["direction":0,"in_wall_bit":false,"open_bit":false]`, "0")
        .replaceAll(`["direction":0,"in_wall_bit":false,"open_bit":true]`, "0")
        .replaceAll(`["direction":0,"in_wall_bit":true,"open_bit":true]`, "0")
        .replaceAll(
          `["direction":0,"open_bit":false,"upside_down_bit":false]`,
          "0"
        )
        .replaceAll(
          `["direction":0,"open_bit":false,"upside_down_bit":false]`,
          "1"
        )
        .replaceAll(
          `["direction":0,"open_bit":false,"upside_down_bit":false]`,
          "2"
        )
        .replaceAll(
          `["direction":0,"open_bit":false,"upside_down_bit":false]`,
          "3"
        )
        .replaceAll(
          `["direction":0,"open_bit":false,"upside_down_bit":true]`,
          "1"
        )
        .replaceAll(
          `["direction":0,"open_bit":false,"upside_down_bit":true]`,
          "2"
        )
        .replaceAll(
          `["direction":0,"open_bit":false,"upside_down_bit":true]`,
          "3"
        )
        .replaceAll(
          `["direction":0,"open_bit":true,"upside_down_bit":false]`,
          "0"
        )
        .replaceAll(
          `["direction":0,"open_bit":true,"upside_down_bit":false]`,
          "1"
        )
        .replaceAll(
          `["direction":0,"open_bit":true,"upside_down_bit":false]`,
          "2"
        )
        .replaceAll(
          `["direction":0,"open_bit":true,"upside_down_bit":false]`,
          "3"
        )
        .replaceAll(
          `["direction":0,"open_bit":true,"upside_down_bit":true]`,
          "1"
        )
        .replaceAll(
          `["direction":0,"open_bit":true,"upside_down_bit":true]`,
          "2"
        )
        .replaceAll(
          `["direction":0,"open_bit":true,"upside_down_bit":true]`,
          "3"
        )
        .replaceAll(
          `["direction":0,"output_lit_bit":false,"output_subtract_bit":false]`,
          "0"
        )
        .replaceAll(
          `["direction":0,"output_lit_bit":false,"output_subtract_bit":true]`,
          "0"
        )
        .replaceAll(
          `["direction":0,"output_lit_bit":true,"output_subtract_bit":false]`,
          "0"
        )
        .replaceAll(`["direction":0,"powered_bit":false]`, "0")
        .replaceAll(`["direction":0,"repeater_delay":0]`, "0")
        .replaceAll(`["direction":0,"repeater_delay":1]`, "0")
        .replaceAll(`["direction":0,"repeater_delay":2]`, "0")
        .replaceAll(`["direction":0,"repeater_delay":3]`, "0")
        .replaceAll(`["direction":0]`, "0")
        .replaceAll(
          `["direction":1,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "1"
        )
        .replaceAll(
          `["direction":1,"door_hinge_bit":false,"open_bit":true,"upper_block_bit":false]`,
          "1"
        )
        .replaceAll(
          `["direction":1,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "1"
        )
        .replaceAll(
          `["direction":1,"door_hinge_bit":true,"open_bit":true,"upper_block_bit":false]`,
          "1"
        )
        .replaceAll(`["direction":1,"end_portal_eye_bit":false]`, "1")
        .replaceAll(`["direction":1,"end_portal_eye_bit":true]`, "1")
        .replaceAll(`["direction":1,"extinguished":false]`, "1")
        .replaceAll(`["direction":1,"extinguished":true]`, "1")
        .replaceAll(
          `["direction":1,"head_piece_bit":true,"occupied_bit":false]`,
          "1"
        )
        .replaceAll(`["direction":1,"honey_level":0]`, "1")
        .replaceAll(`["direction":1,"in_wall_bit":false,"open_bit":false]`, "1")
        .replaceAll(`["direction":1,"in_wall_bit":false,"open_bit":true]`, "1")
        .replaceAll(`["direction":1,"in_wall_bit":true,"open_bit":true]`, "1")
        .replaceAll(
          `["direction":1,"open_bit":false,"upside_down_bit":false]`,
          "1"
        )
        .replaceAll(
          `["direction":1,"open_bit":false,"upside_down_bit":true]`,
          "1"
        )
        .replaceAll(
          `["direction":1,"open_bit":true,"upside_down_bit":false]`,
          "1"
        )
        .replaceAll(
          `["direction":1,"open_bit":true,"upside_down_bit":true]`,
          "1"
        )
        .replaceAll(
          `["direction":1,"output_lit_bit":false,"output_subtract_bit":false]`,
          "1"
        )
        .replaceAll(
          `["direction":1,"output_lit_bit":true,"output_subtract_bit":false]`,
          "1"
        )
        .replaceAll(`["direction":1,"powered_bit":false]`, "1")
        .replaceAll(`["direction":1,"repeater_delay":0]`, "1")
        .replaceAll(`["direction":1,"repeater_delay":1]`, "1")
        .replaceAll(`["direction":1,"repeater_delay":2]`, "1")
        .replaceAll(`["direction":1,"repeater_delay":3]`, "1")
        .replaceAll(`["direction":1]`, "1")
        .replaceAll(
          `["direction":2,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "2"
        )
        .replaceAll(
          `["direction":2,"door_hinge_bit":false,"open_bit":true,"upper_block_bit":false]`,
          "2"
        )
        .replaceAll(
          `["direction":2,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "2"
        )
        .replaceAll(`["direction":2,"end_portal_eye_bit":false]`, "2")
        .replaceAll(`["direction":2,"end_portal_eye_bit":true]`, "2")
        .replaceAll(`["direction":2,"extinguished":false]`, "2")
        .replaceAll(`["direction":2,"extinguished":true]`, "2")
        .replaceAll(
          `["direction":2,"head_piece_bit":true,"occupied_bit":false]`,
          "2"
        )
        .replaceAll(`["direction":2,"honey_level":0]`, "2")
        .replaceAll(`["direction":2,"in_wall_bit":false,"open_bit":false]`, "2")
        .replaceAll(`["direction":2,"in_wall_bit":false,"open_bit":true]`, "2")
        .replaceAll(`["direction":2,"in_wall_bit":true,"open_bit":true]`, "2")
        .replaceAll(
          `["direction":2,"open_bit":false,"upside_down_bit":false]`,
          "2"
        )
        .replaceAll(
          `["direction":2,"open_bit":false,"upside_down_bit":true]`,
          "2"
        )
        .replaceAll(
          `["direction":2,"open_bit":true,"upside_down_bit":false]`,
          "2"
        )
        .replaceAll(
          `["direction":2,"open_bit":true,"upside_down_bit":true]`,
          "2"
        )
        .replaceAll(
          `["direction":2,"output_lit_bit":false,"output_subtract_bit":false]`,
          "2"
        )
        .replaceAll(
          `["direction":2,"output_lit_bit":false,"output_subtract_bit":true]`,
          "2"
        )
        .replaceAll(
          `["direction":2,"output_lit_bit":true,"output_subtract_bit":false]`,
          "2"
        )
        .replaceAll(
          `["direction":2,"output_lit_bit":true,"output_subtract_bit":true]`,
          "2"
        )
        .replaceAll(`["direction":2,"powered_bit":false]`, "2")
        .replaceAll(`["direction":2,"repeater_delay":0]`, "2")
        .replaceAll(`["direction":2,"repeater_delay":1]`, "2")
        .replaceAll(`["direction":2,"repeater_delay":2]`, "2")
        .replaceAll(`["direction":2,"repeater_delay":3]`, "2")
        .replaceAll(`["direction":2]`, "2")
        .replaceAll(
          `["direction":3,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "3"
        )
        .replaceAll(
          `["direction":3,"door_hinge_bit":false,"open_bit":true,"upper_block_bit":false]`,
          "3"
        )
        .replaceAll(
          `["direction":3,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "3"
        )
        .replaceAll(
          `["direction":3,"door_hinge_bit":true,"open_bit":true,"upper_block_bit":false]`,
          "3"
        )
        .replaceAll(`["direction":3,"end_portal_eye_bit":false]`, "3")
        .replaceAll(`["direction":3,"end_portal_eye_bit":true]`, "3")
        .replaceAll(`["direction":3,"extinguished":false]`, "3")
        .replaceAll(`["direction":3,"extinguished":true]`, "3")
        .replaceAll(
          `["direction":3,"head_piece_bit":true,"occupied_bit":false]`,
          "3"
        )
        .replaceAll(`["direction":3,"honey_level":0]`, "3")
        .replaceAll(`["direction":3,"in_wall_bit":false,"open_bit":false]`, "3")
        .replaceAll(`["direction":3,"in_wall_bit":false,"open_bit":true]`, "3")
        .replaceAll(`["direction":3,"in_wall_bit":true,"open_bit":true]`, "3")
        .replaceAll(
          `["direction":3,"open_bit":false,"upside_down_bit":false]`,
          "3"
        )
        .replaceAll(
          `["direction":3,"open_bit":false,"upside_down_bit":true]`,
          "3"
        )
        .replaceAll(
          `["direction":3,"open_bit":true,"upside_down_bit":false]`,
          "3"
        )
        .replaceAll(
          `["direction":3,"open_bit":true,"upside_down_bit":true]`,
          "3"
        )
        .replaceAll(
          `["direction":3,"output_lit_bit":false,"output_subtract_bit":false]`,
          "3"
        )
        .replaceAll(
          `["direction":3,"output_lit_bit":true,"output_subtract_bit":false]`,
          "3"
        )
        .replaceAll(`["direction":3,"powered_bit":false]`, "3")
        .replaceAll(`["direction":3,"repeater_delay":0]`, "3")
        .replaceAll(`["direction":3,"repeater_delay":1]`, "3")
        .replaceAll(`["direction":3,"repeater_delay":2]`, "3")
        .replaceAll(`["direction":3,"repeater_delay":3]`, "3")
        .replaceAll(`["direction":3]`, "3")
        .replaceAll(
          `["direction":4,"door_hinge_bit":false,"open_bit":false,"upper_block_bit":false]`,
          "4"
        )
        .replaceAll(
          `["direction":4,"door_hinge_bit":true,"open_bit":false,"upper_block_bit":false]`,
          "4"
        )
        .replaceAll(`["dirt_type":"coarse"]`, "1")
        .replaceAll(`["dirt_type":"normal"]`, "0")
        .replaceAll(`["double_plant_type":"fern","upper_block_bit":false]`, "3")
        .replaceAll(
          `["double_plant_type":"grass","upper_block_bit":false]`,
          "2"
        )
        .replaceAll(
          `["double_plant_type":"paenoia","upper_block_bit":false]`,
          "5"
        )
        .replaceAll(
          `["double_plant_type":"paeonia","upper_block_bit":false"]`,
          "0"
        )
        .replaceAll(`["double_plant_type":"rose","upper_block_bit":false]`, "4")
        .replaceAll(
          `["double_plant_type":"sunflower","upper_block_bit":false]`,
          "0"
        )
        .replaceAll(
          `["double_plant_type":"syringa","upper_block_bit":false]`,
          "1"
        )
        .replaceAll(`["drag_down":false]`, "0")
        .replaceAll(`["drag_down":true]`, "1")
        .replaceAll(`["dripstone_thickness":"frustum","hanging":true]`, "0")
        .replaceAll(`["dripstone_thickness":"tip","hanging":true]`, "0")
        .replaceAll(`["facing_direction":0,"growth":7]`, "7")
        .replaceAll(`["facing_direction":0,"open_bit":false]`, "0")
        .replaceAll(`["facing_direction":0,"open_bit":true]`, "0")
        .replaceAll(`["facing_direction":0,"powered_bit":false]`, "0")
        .replaceAll(`["facing_direction":0,"powered_bit":true]`, "0")
        .replaceAll(`["facing_direction":0,"toggle_bit":false]`, "0")
        .replaceAll(`["facing_direction":0,"toggle_bit":true]`, "0")
        .replaceAll(`["facing_direction":0,"triggered_bit":false]`, "0")
        .replaceAll(`["facing_direction":0,"triggered_bit":true]`, "0")
        .replaceAll(`["facing_direction":0]`, "0")
        .replaceAll(`["facing_direction":1,"open_bit":false]`, "1")
        .replaceAll(`["facing_direction":1,"open_bit":true]`, "1")
        .replaceAll(`["facing_direction":1,"powered_bit":false]`, "1")
        .replaceAll(`["facing_direction":1,"powered_bit":true]`, "1")
        .replaceAll(`["facing_direction":1,"triggered_bit":false]`, "1")
        .replaceAll(`["facing_direction":1,"triggered_bit":true]`, "1")
        .replaceAll(`["facing_direction":1]`, "1")
        .replaceAll(`["facing_direction":2,"open_bit":false]`, "2")
        .replaceAll(`["facing_direction":2,"open_bit":true]`, "2")
        .replaceAll(`["facing_direction":2,"powered_bit":false]`, "2")
        .replaceAll(`["facing_direction":2,"powered_bit":true]`, "2")
        .replaceAll(`["facing_direction":2,"toggle_bit":false]`, "2")
        .replaceAll(`["facing_direction":2,"toggle_bit":true]`, "2")
        .replaceAll(`["facing_direction":2,"triggered_bit":false]`, "2")
        .replaceAll(`["facing_direction":2,"triggered_bit":true]`, "2")
        .replaceAll(`["facing_direction":2]`, "2")
        .replaceAll(`["facing_direction":3,"open_bit":false]`, "3")
        .replaceAll(`["facing_direction":3,"open_bit":true]`, "3")
        .replaceAll(`["facing_direction":3,"powered_bit":false]`, "3")
        .replaceAll(`["facing_direction":3,"powered_bit":true]`, "3")
        .replaceAll(`["facing_direction":3,"toggle_bit":false]`, "3")
        .replaceAll(`["facing_direction":3,"toggle_bit":true]`, "3")
        .replaceAll(`["facing_direction":3,"triggered_bit":false]`, "3")
        .replaceAll(`["facing_direction":3,"triggered_bit":true]`, "3")
        .replaceAll(`["facing_direction":3]`, "3")
        .replaceAll(`["facing_direction":4,"open_bit":false]`, "4")
        .replaceAll(`["facing_direction":4,"powered_bit":false]`, "4")
        .replaceAll(`["facing_direction":4,"powered_bit":true]`, "4")
        .replaceAll(`["facing_direction":4,"toggle_bit":false]`, "4")
        .replaceAll(`["facing_direction":4,"toggle_bit":true]`, "4")
        .replaceAll(`["facing_direction":4,"triggered_bit":false]`, "4")
        .replaceAll(`["facing_direction":4,"triggered_bit":true]`, "4")
        .replaceAll(`["facing_direction":4]`, "4")
        .replaceAll(`["facing_direction":5,"open_bit":false]`, "5")
        .replaceAll(`["facing_direction":5,"powered_bit":false]`, "5")
        .replaceAll(`["facing_direction":5,"powered_bit":true]`, "5")
        .replaceAll(`["facing_direction":5,"toggle_bit":false]`, "5")
        .replaceAll(`["facing_direction":5,"toggle_bit":true]`, "5")
        .replaceAll(`["facing_direction":5,"triggered_bit":false]`, "5")
        .replaceAll(`["facing_direction":5,"triggered_bit":true]`, "5")
        .replaceAll(`["facing_direction":5]`, "5")
        .replaceAll(`["facing_direction":6,"triggered_bit":false]`, "6")
        .replaceAll(`["facing_direction":6,"triggered_bit":true]`, "6")
        .replaceAll(`["facing_direction":6]`, "6")
        .replaceAll(`["facing_direction":7,"triggered_bit":false]`, "7")
        .replaceAll(`["facing_direction":7,"triggered_bit":true]`, "7")
        .replaceAll(`["flower_type":"allium"]`, "2")
        .replaceAll(`["flower_type":"cornflower"]`, "9")
        .replaceAll(`["flower_type":"houstonia"]`, "3")
        .replaceAll(`["flower_type":"lily_of_the_valley"]`, "10")
        .replaceAll(`["flower_type":"orchid"]`, "1")
        .replaceAll(`["flower_type":"oxeye"]`, "8")
        .replaceAll(`["flower_type":"poppy"]`, "0")
        .replaceAll(`["flower_type":"tulip_orange"]`, "5")
        .replaceAll(`["flower_type":"tulip_pink"]`, "7")
        .replaceAll(`["flower_type":"tulip_red"]`, "4")
        .replaceAll(`["flower_type":"tulip_white"]`, "6")
        .replaceAll(`["ground_sign_direction":0]`, "0")
        .replaceAll(`["ground_sign_direction":10]`, "10")
        .replaceAll(`["ground_sign_direction":11]`, "11")
        .replaceAll(`["ground_sign_direction":12]`, "12")
        .replaceAll(`["ground_sign_direction":13]`, "13")
        .replaceAll(`["ground_sign_direction":14]`, "14")
        .replaceAll(`["ground_sign_direction":15]`, "15")
        .replaceAll(`["ground_sign_direction":1]`, "1")
        .replaceAll(`["ground_sign_direction":2]`, "2")
        .replaceAll(`["ground_sign_direction":3]`, "3")
        .replaceAll(`["ground_sign_direction":4]`, "4")
        .replaceAll(`["ground_sign_direction":5]`, "5")
        .replaceAll(`["ground_sign_direction":6]`, "6")
        .replaceAll(`["ground_sign_direction":7]`, "7")
        .replaceAll(`["ground_sign_direction":8]`, "8")
        .replaceAll(`["ground_sign_direction":9]`, "9")
        .replaceAll(`["growth":0]`, "0")
        .replaceAll(`["growth":1]`, "1")
        .replaceAll(`["growth":2]`, "2")
        .replaceAll(`["growth":3]`, "3")
        .replaceAll(`["growth":4]`, "4")
        .replaceAll(`["growth":5]`, "5")
        .replaceAll(`["growth":6]`, "6")
        .replaceAll(`["growth":7]`, "7")
        .replaceAll(`["hanging":false]`, "0")
        .replaceAll(`["hanging":true]`, "1")
        .replaceAll(`["huge_mushroom_bits":0]`, "0")
        .replaceAll(`["huge_mushroom_bits":10]`, "10")
        .replaceAll(`["huge_mushroom_bits":11]`, "11")
        .replaceAll(`["huge_mushroom_bits":12]`, "12")
        .replaceAll(`["huge_mushroom_bits":13]`, "13")
        .replaceAll(`["huge_mushroom_bits":14]`, "14")
        .replaceAll(`["huge_mushroom_bits":15]`, "15")
        .replaceAll(`["huge_mushroom_bits":16]`, "16")
        .replaceAll(`["huge_mushroom_bits":1]`, "1")
        .replaceAll(`["huge_mushroom_bits":2]`, "2")
        .replaceAll(`["huge_mushroom_bits":3]`, "3")
        .replaceAll(`["huge_mushroom_bits":4]`, "4")
        .replaceAll(`["huge_mushroom_bits":5]`, "5")
        .replaceAll(`["huge_mushroom_bits":6]`, "6")
        .replaceAll(`["huge_mushroom_bits":7]`, "7")
        .replaceAll(`["huge_mushroom_bits":8]`, "8")
        .replaceAll(`["huge_mushroom_bits":9]`, "9")
        .replaceAll(`["infiniburn_bit":false]`, "0")
        .replaceAll(`["infiniburn_bit":true]`, "0")
        .replaceAll(`["kelp_age":0]`, "0")
        .replaceAll(`["kelp_age":10]`, "10")
        .replaceAll(`["kelp_age":11]`, "11")
        .replaceAll(`["kelp_age":12]`, "12")
        .replaceAll(`["kelp_age":13]`, "13")
        .replaceAll(`["kelp_age":14]`, "14")
        .replaceAll(`["kelp_age":15]`, "15")
        .replaceAll(`["kelp_age":16]`, "16")
        .replaceAll(`["kelp_age":17]`, "17")
        .replaceAll(`["kelp_age":18]`, "18")
        .replaceAll(`["kelp_age":19]`, "19")
        .replaceAll(`["kelp_age":1]`, "1")
        .replaceAll(`["kelp_age":20]`, "20")
        .replaceAll(`["kelp_age":21]`, "21")
        .replaceAll(`["kelp_age":22]`, "22")
        .replaceAll(`["kelp_age":23]`, "23")
        .replaceAll(`["kelp_age":24]`, "24")
        .replaceAll(`["kelp_age":25]`, "25")
        .replaceAll(`["kelp_age":2]`, "2")
        .replaceAll(`["kelp_age":3]`, "3")
        .replaceAll(`["kelp_age":4]`, "4")
        .replaceAll(`["kelp_age":5]`, "5")
        .replaceAll(`["kelp_age":6]`, "6")
        .replaceAll(`["kelp_age":7]`, "7")
        .replaceAll(`["kelp_age":8]`, "8")
        .replaceAll(`["kelp_age":9]`, "9");
    };
    const Function2 = () => {
      G = F.replaceAll(
        `["lever_direction":"down_east_west","open_bit":false]`,
        "0"
      )
        .replaceAll(`["lever_direction":"down_east_west","open_bit":true]`, "0")
        .replaceAll(
          `["lever_direction":"down_north_south","open_bit":false]`,
          "7"
        )
        .replaceAll(
          `["lever_direction":"down_north_south","open_bit":true]`,
          "7"
        )
        .replaceAll(`["lever_direction":"east","open_bit":false]`, "1")
        .replaceAll(`["lever_direction":"east","open_bit":true]`, "1")
        .replaceAll(`["lever_direction":"north","open_bit":false]`, "4")
        .replaceAll(`["lever_direction":"north","open_bit":true]`, "4")
        .replaceAll(`["lever_direction":"south","open_bit":false]`, "3")
        .replaceAll(`["lever_direction":"south","open_bit":true]`, "3")
        .replaceAll(`["lever_direction":"up_east_west","open_bit":false]`, "6")
        .replaceAll(`["lever_direction":"up_east_west","open_bit":true]`, "6")
        .replaceAll(
          `["lever_direction":"up_north_south","open_bit":false]`,
          "5"
        )
        .replaceAll(`["lever_direction":"up_north_south","open_bit":true]`, "5")
        .replaceAll(`["lever_direction":"west","open_bit":false]`, "2")
        .replaceAll(`["lever_direction":"west","open_bit":true]`, "2")
        .replaceAll(`["liquid_depth":0]`, "0")
        .replaceAll(`["liquid_depth":10]`, "10")
        .replaceAll(`["liquid_depth":11]`, "11")
        .replaceAll(`["liquid_depth":12]`, "12")
        .replaceAll(`["liquid_depth":13]`, "13")
        .replaceAll(`["liquid_depth":14]`, "14")
        .replaceAll(`["liquid_depth":15]`, "15")
        .replaceAll(`["liquid_depth":1]`, "1")
        .replaceAll(`["liquid_depth":2]`, "2")
        .replaceAll(`["liquid_depth":3]`, "3")
        .replaceAll(`["liquid_depth":4]`, "4")
        .replaceAll(`["liquid_depth":5]`, "5")
        .replaceAll(`["liquid_depth":6]`, "6")
        .replaceAll(`["liquid_depth":7]`, "7")
        .replaceAll(`["liquid_depth":8]`, "8")
        .replaceAll(`["liquid_depth":9]`, "9")
        .replaceAll(`["moisture":0]`, "0")
        .replaceAll(`["moisture":1]`, "1")
        .replaceAll(`["moisture":2]`, "2")
        .replaceAll(`["moisture":3]`, "3")
        .replaceAll(`["moisture":4]`, "4")
        .replaceAll(`["moisture":5]`, "5")
        .replaceAll(`["moisture":6]`, "6")
        .replaceAll(`["moisture":7]`, "7")
        .replaceAll(`["moisturized_amount":0]`, "0")
        .replaceAll(`["moisturized_amount":1]`, "1")
        .replaceAll(`["moisturized_amount":2]`, "2")
        .replaceAll(`["moisturized_amount":3]`, "3")
        .replaceAll(`["moisturized_amount":4]`, "4")
        .replaceAll(`["moisturized_amount":5]`, "5")
        .replaceAll(`["moisturized_amount":6]`, "6")
        .replaceAll(`["moisturized_amount":7]`, "7")
        .replaceAll(`["moisturized_amount":8]`, "8")
        .replaceAll(`["monster_egg_stone_type":"chiseled_stone_brick"]`, "0")
        .replaceAll(`["monster_egg_stone_type":"chiseled_stone_brick"]`, "5")
        .replaceAll(`["monster_egg_stone_type":"cobblestone"]`, "1")
        .replaceAll(`["monster_egg_stone_type":"cracked_stone_brick"]`, "4")
        .replaceAll(`["monster_egg_stone_type":"mossy_stone_brick"]`, "3")
        .replaceAll(`["monster_egg_stone_type":"stone"]`, "0")
        .replaceAll(`["monster_egg_stone_type":"stone_brick"]`, "2")
        .replaceAll(`["multi_face_direction_bits":0]`, "0")
        .replaceAll(`["multi_face_direction_bits":10]`, "10")
        .replaceAll(`["multi_face_direction_bits":11]`, "11")
        .replaceAll(`["multi_face_direction_bits":12]`, "12")
        .replaceAll(`["multi_face_direction_bits":13]`, "13")
        .replaceAll(`["multi_face_direction_bits":14]`, "14")
        .replaceAll(`["multi_face_direction_bits":15]`, "15")
        .replaceAll(`["multi_face_direction_bits":16]`, "16")
        .replaceAll(`["multi_face_direction_bits":18]`, "18")
        .replaceAll(`["multi_face_direction_bits":19]`, "19")
        .replaceAll(`["multi_face_direction_bits":1]`, "1")
        .replaceAll(`["multi_face_direction_bits":20]`, "20")
        .replaceAll(`["multi_face_direction_bits":21]`, "21")
        .replaceAll(`["multi_face_direction_bits":22]`, "22")
        .replaceAll(`["multi_face_direction_bits":23]`, "23")
        .replaceAll(`["multi_face_direction_bits":24]`, "24")
        .replaceAll(`["multi_face_direction_bits":25]`, "25")
        .replaceAll(`["multi_face_direction_bits":26]`, "26")
        .replaceAll(`["multi_face_direction_bits":27]`, "27")
        .replaceAll(`["multi_face_direction_bits":28]`, "28")
        .replaceAll(`["multi_face_direction_bits":29]`, "29")
        .replaceAll(`["multi_face_direction_bits":2]`, "2")
        .replaceAll(`["multi_face_direction_bits":30]`, "30")
        .replaceAll(`["multi_face_direction_bits":31]`, "31")
        .replaceAll(`["multi_face_direction_bits":32]`, "32")
        .replaceAll(`["multi_face_direction_bits":33]`, "33")
        .replaceAll(`["multi_face_direction_bits":34]`, "34")
        .replaceAll(`["multi_face_direction_bits":35]`, "35")
        .replaceAll(`["multi_face_direction_bits":36]`, "36")
        .replaceAll(`["multi_face_direction_bits":37]`, "37")
        .replaceAll(`["multi_face_direction_bits":38]`, "38")
        .replaceAll(`["multi_face_direction_bits":39]`, "39")
        .replaceAll(`["multi_face_direction_bits":3]`, "3")
        .replaceAll(`["multi_face_direction_bits":40]`, "40")
        .replaceAll(`["multi_face_direction_bits":41]`, "41")
        .replaceAll(`["multi_face_direction_bits":42]`, "42")
        .replaceAll(`["multi_face_direction_bits":43]`, "43")
        .replaceAll(`["multi_face_direction_bits":44]`, "44")
        .replaceAll(`["multi_face_direction_bits":45]`, "45")
        .replaceAll(`["multi_face_direction_bits":46]`, "46")
        .replaceAll(`["multi_face_direction_bits":47]`, "47")
        .replaceAll(`["multi_face_direction_bits":48]`, "48")
        .replaceAll(`["multi_face_direction_bits":49]`, "49")
        .replaceAll(`["multi_face_direction_bits":4]`, "4")
        .replaceAll(`["multi_face_direction_bits":50]`, "50")
        .replaceAll(`["multi_face_direction_bits":51]`, "51")
        .replaceAll(`["multi_face_direction_bits":52]`, "52")
        .replaceAll(`["multi_face_direction_bits":53]`, "53")
        .replaceAll(`["multi_face_direction_bits":54]`, "54")
        .replaceAll(`["multi_face_direction_bits":55]`, "55")
        .replaceAll(`["multi_face_direction_bits":56]`, "56")
        .replaceAll(`["multi_face_direction_bits":57]`, "57")
        .replaceAll(`["multi_face_direction_bits":58]`, "58")
        .replaceAll(`["multi_face_direction_bits":59]`, "59")
        .replaceAll(`["multi_face_direction_bits":5]`, "5")
        .replaceAll(`["multi_face_direction_bits":60]`, "60")
        .replaceAll(`["multi_face_direction_bits":61]`, "61")
        .replaceAll(`["multi_face_direction_bits":62]`, "62")
        .replaceAll(`["multi_face_direction_bits":63]`, "63")
        .replaceAll(`["multi_face_direction_bits":6]`, "6")
        .replaceAll(`["multi_face_direction_bits":7]`, "7")
        .replaceAll(`["multi_face_direction_bits":8]`, "8")
        .replaceAll(`["multi_face_direction_bits":9]`, "9")
        .replaceAll(
          `["new_leaf_type":"acacia","persistent_bit":false,"update_bit":false]`,
          "3"
        )
        .replaceAll(
          `["new_leaf_type":"acacia","persistent_bit":false,"update_bit":true]`,
          "3"
        )
        .replaceAll(
          `["new_leaf_type":"acacia","persistent_bit":true,"update_bit":false]`,
          "3"
        )
        .replaceAll(
          `["new_leaf_type":"acacia","persistent_bit":true,"update_bit":true]`,
          "3"
        )
        .replaceAll(
          `["new_leaf_type":"dark_oak","persistent_bit":true,"update_bit":false]`,
          "1"
        )
        .replaceAll(
          `["new_leaf_type":"dark_oak","persistent_bit":true,"update_bit":true]`,
          "1"
        )
        .replaceAll(`["new_log_type":"acacia","pillar_axis":"y"]`, "0")
        .replaceAll(`["new_log_type":"acacia","pillar_axis":"z"]`, "0")
        .replaceAll(`["new_log_type":"dark_oak","pillar_axis":"x"]`, "1")
        .replaceAll(`["new_log_type":"dark_oak","pillar_axis":"y"]`, "1")
        .replaceAll(`["new_log_type":"dark_oak","pillar_axis":"z"]`, "1")
        .replaceAll(
          `["old_leaf_type":"birch","persistent_bit":false,"update_bit":false]`,
          "2"
        )
        .replaceAll(
          `["old_leaf_type":"birch","persistent_bit":false,"update_bit":true]`,
          "2"
        )
        .replaceAll(
          `["old_leaf_type":"birch","persistent_bit":true,"update_bit":false]`,
          "2"
        )
        .replaceAll(
          `["old_leaf_type":"birch","persistent_bit":true,"update_bit":true]`,
          "2"
        )
        .replaceAll(
          `["old_leaf_type":"jungle","persistent_bit":false,"update_bit":false]`,
          "3"
        )
        .replaceAll(
          `["old_leaf_type":"jungle","persistent_bit":false,"update_bit":true]`,
          "3"
        )
        .replaceAll(
          `["old_leaf_type":"jungle","persistent_bit":true,"update_bit":false]`,
          "3"
        )
        .replaceAll(
          `["old_leaf_type":"jungle","persistent_bit":true,"update_bit":true]`,
          "3"
        )
        .replaceAll(
          `["old_leaf_type":"oak","persistent_bit":false,"update_bit":false]`,
          "0"
        )
        .replaceAll(
          `["old_leaf_type":"oak","persistent_bit":false,"update_bit":true]`,
          "0"
        )
        .replaceAll(
          `["old_leaf_type":"oak","persistent_bit":true,"update_bit":false]`,
          "0"
        )
        .replaceAll(
          `["old_leaf_type":"oak","persistent_bit":true,"update_bit":true]`,
          "0"
        )
        .replaceAll(
          `["old_leaf_type":"spruce","persistent_bit":false,"update_bit":false]`,
          "1"
        )
        .replaceAll(
          `["old_leaf_type":"spruce","persistent_bit":false,"update_bit":true]`,
          "1"
        )
        .replaceAll(
          `["old_leaf_type":"spruce","persistent_bit":true,"update_bit":false]`,
          "1"
        )
        .replaceAll(
          `["old_leaf_type":"spruce","persistent_bit":true,"update_bit":true]`,
          "1"
        )
        .replaceAll(`["old_log_type":"birch","pillar_axis":"x"]`, "2")
        .replaceAll(`["old_log_type":"birch","pillar_axis":"y"]`, "2")
        .replaceAll(`["old_log_type":"birch","pillar_axis":"z"]`, "2")
        .replaceAll(`["old_log_type":"jungle","pillar_axis":"x"]`, "3")
        .replaceAll(`["old_log_type":"jungle","pillar_axis":"y"]`, "3")
        .replaceAll(`["old_log_type":"jungle","pillar_axis":"z"]`, "3")
        .replaceAll(`["old_log_type":"oak","pillar_axis":"x"]`, "0")
        .replaceAll(`["old_log_type":"oak","pillar_axis":"y"]`, "0")
        .replaceAll(`["old_log_type":"oak","pillar_axis":"z"]`, "0")
        .replaceAll(`["old_log_type":"spruce","pillar_axis":"x"]`, "1")
        .replaceAll(`["old_log_type":"spruce","pillar_axis":"y"]`, "1")
        .replaceAll(`["old_log_type":"spruce","pillar_axis":"z"]`, "1")
        .replaceAll(`["persistent_bit":true,"update_bit":false]`, "0")
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":false,"wood_type":"acacia"]`,
          "4"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":false,"wood_type":"birch"]`,
          "2"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":false,"wood_type":"dark_oak"]`,
          "5"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":false,"wood_type":"jungle"]`,
          "3"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":false,"wood_type":"oak"]`,
          "0"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":false,"wood_type":"spruce"]`,
          "1"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":true,"wood_type":"acacia"]`,
          "4"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":true,"wood_type":"birch"]`,
          "2"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":true,"wood_type":"dark_oak"]`,
          "5"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":true,"wood_type":"jungle"]`,
          "3"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":true,"wood_type":"oak"]`,
          "0"
        )
        .replaceAll(
          `["pillar_axis":"x","stripped_bit":true,"wood_type":"spruce"]`,
          "1"
        )
        .replaceAll(`["pillar_axis":"x"]`, "1")
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":false,"wood_type":"acacia"]`,
          "4"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":false,"wood_type":"birch"]`,
          "2"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":false,"wood_type":"dark_oak"]`,
          "5"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":false,"wood_type":"jungle"]`,
          "3"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":false,"wood_type":"oak"]`,
          "0"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":false,"wood_type":"spruce"]`,
          "1"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":true,"wood_type":"acacia"]`,
          "4"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":true,"wood_type":"birch"]`,
          "2"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":true,"wood_type":"dark_oak"]`,
          "5"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":true,"wood_type":"jungle"]`,
          "3"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":true,"wood_type":"oak"]`,
          "0"
        )
        .replaceAll(
          `["pillar_axis":"y","stripped_bit":true,"wood_type":"spruce"]`,
          "1"
        )
        .replaceAll(`["pillar_axis":"y"]`, "0")
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":false,"wood_type":"acacia"]`,
          "4"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":false,"wood_type":"birch"]`,
          "2"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":false,"wood_type":"dark_oak"]`,
          "5"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":false,"wood_type":"jungle"]`,
          "3"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":false,"wood_type":"oak"]`,
          "0"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":false,"wood_type":"spruce"]`,
          "1"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":true,"wood_type":"acacia"]`,
          "4"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":true,"wood_type":"birch"]`,
          "2"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":true,"wood_type":"dark_oak"]`,
          "5"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":true,"wood_type":"jungle"]`,
          "3"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":true,"wood_type":"oak"]`,
          "0"
        )
        .replaceAll(
          `["pillar_axis":"z","stripped_bit":true,"wood_type":"spruce"]`,
          "1"
        )
        .replaceAll(`["pillar_axis":"z"]`, "2")
        .replaceAll(`["portal_axis":"unknown"]`, "0")
        .replaceAll(`["portal_axis":"x"]`, "1")
        .replaceAll(`["portal_axis":"z"]`, "2")
        .replaceAll(`["prismarine_block_type":"bricks"]`, "2")
        .replaceAll(`["prismarine_block_type":"dark"]`, "1")
        .replaceAll(`["prismarine_block_type":"default"]`, "0")
        .replaceAll(`["rail_data_bit":false,"rail_direction":0]`, "0")
        .replaceAll(`["rail_data_bit":false,"rail_direction":1]`, "1")
        .replaceAll(`["rail_direction":0]`, "0")
        .replaceAll(`["rail_direction":1]`, "1")
        .replaceAll(`["rail_direction":2]`, "2")
        .replaceAll(`["rail_direction":3]`, "3")
        .replaceAll(`["rail_direction":4]`, "4")
        .replaceAll(`["rail_direction":5]`, "5")
        .replaceAll(`["rail_direction":6]`, "6")
        .replaceAll(`["rail_direction":7]`, "7")
        .replaceAll(`["rail_direction":8]`, "8")
        .replaceAll(`["rail_direction":9]`, "9")
        .replaceAll(`["redstone_signal":0]`, "0")
        .replaceAll(`["redstone_signal":10]`, "10")
        .replaceAll(`["redstone_signal":11]`, "11")
        .replaceAll(`["redstone_signal":12]`, "12")
        .replaceAll(`["redstone_signal":13]`, "13")
        .replaceAll(`["redstone_signal":14]`, "14")
        .replaceAll(`["redstone_signal":15]`, "15")
        .replaceAll(`["redstone_signal":1]`, "1")
        .replaceAll(`["redstone_signal":2]`, "2")
        .replaceAll(`["redstone_signal":3]`, "3")
        .replaceAll(`["redstone_signal":4]`, "4")
        .replaceAll(`["redstone_signal":5]`, "5")
        .replaceAll(`["redstone_signal":6]`, "6")
        .replaceAll(`["redstone_signal":7]`, "7")
        .replaceAll(`["redstone_signal":8]`, "8")
        .replaceAll(`["redstone_signal":9]`, "9")
        .replaceAll(`["sand_stone_type":"cut"]`, "2")
        .replaceAll(`["sand_stone_type":"default"]`, "0")
        .replaceAll(`["sand_stone_type":"heiroglyphs"]`, "1")
        .replaceAll(`["sand_stone_type":"smooth"]`, "3")
        .replaceAll(`["sand_type":"normal"]`, "0")
        .replaceAll(`["sand_type":"red"]`, "1")
        .replaceAll(`["sea_grass_type":"default"]`, "0")
        .replaceAll(`["sea_grass_type":"double_bot"]`, "1")
        .replaceAll(`["sea_grass_type":"double_top"]`, "2")
        .replaceAll(`["sponge_type":"dry"]`, "0")
        .replaceAll(`["sponge_type":"wet"]`, "1")
        .replaceAll(`["stability":0,"stability_check":false]`, "0")
        .replaceAll(`["stability":0,"stability_check":true]`, "1")
        .replaceAll(`["stone_brick_type":"chiseled"]`, "3")
        .replaceAll(`["stone_brick_type":"cracked"]`, "2")
        .replaceAll(`["stone_brick_type":"default"]`, "0")
        .replaceAll(`["stone_brick_type":"mossy"]`, "1")
        .replaceAll(`["stone_brick_type":"smooth"]`, "4")
        .replaceAll(`["stone_slab_type":"brick","top_slot_bit":false]`, "4")
        .replaceAll(`["stone_slab_type":"brick","top_slot_bit":true]`, "12")
        .replaceAll(
          `["stone_slab_type":"cobblestone","top_slot_bit":false]`,
          "3"
        )
        .replaceAll(
          `["stone_slab_type":"cobblestone","top_slot_bit":true]`,
          "11"
        )
        .replaceAll(
          `["stone_slab_type":"nether_brick","top_slot_bit":false]`,
          "7"
        )
        .replaceAll(
          `["stone_slab_type":"nether_brick","top_slot_bit":true]`,
          "15"
        )
        .replaceAll(`["stone_slab_type":"quartz","top_slot_bit":false]`, "6")
        .replaceAll(`["stone_slab_type":"quartz","top_slot_bit":true]`, "14")
        .replaceAll(`["stone_slab_type":"sandstone","top_slot_bit":false]`, "1")
        .replaceAll(`["stone_slab_type":"sandstone","top_slot_bit":true]`, "9")
        .replaceAll(
          `["stone_slab_type":"smooth_stone","top_slot_bit":false]`,
          "0"
        )
        .replaceAll(
          `["stone_slab_type":"smooth_stone","top_slot_bit":true]`,
          "8"
        )
        .replaceAll(
          `["stone_slab_type":"stone_brick","top_slot_bit":false]`,
          "5"
        )
        .replaceAll(
          `["stone_slab_type":"stone_brick","top_slot_bit":true]`,
          "13"
        )
        .replaceAll(`["stone_slab_type":"wood","top_slot_bit":false]`, "0")
        .replaceAll(`["stone_slab_type":"wood","top_slot_bit":true]`, "5")
        .replaceAll(
          `["stone_slab_type":"wooden_slab","top_slot_bit":false]`,
          "2"
        )
        .replaceAll(
          `["stone_slab_type":"wooden_slab","top_slot_bit":true]`,
          "10"
        )
        .replaceAll(
          `["stone_slab_type_2":"mossy_cobblestone","top_slot_bit":false]`,
          "5"
        )
        .replaceAll(
          `["stone_slab_type_2":"mossy_cobblestone","top_slot_bit":true]`,
          "5"
        )
        .replaceAll(
          `["stone_slab_type_2":"prismarine_brick","top_slot_bit":false]`,
          "4"
        )
        .replaceAll(
          `["stone_slab_type_2":"prismarine_brick","top_slot_bit":true]`,
          "4"
        )
        .replaceAll(
          `["stone_slab_type_2":"prismarine_dark","top_slot_bit":false]`,
          "3"
        )
        .replaceAll(
          `["stone_slab_type_2":"prismarine_dark","top_slot_bit":true]`,
          "3"
        )
        .replaceAll(
          `["stone_slab_type_2":"prismarine_rough","top_slot_bit":false]`,
          "2"
        )
        .replaceAll(
          `["stone_slab_type_2":"prismarine_rough","top_slot_bit":true]`,
          "2"
        )
        .replaceAll(`["stone_slab_type_2":"purpur","top_slot_bit":false]`, "1")
        .replaceAll(`["stone_slab_type_2":"purpur","top_slot_bit":true]`, "1")
        .replaceAll(
          `["stone_slab_type_2":"red_nether_brick","top_slot_bit":false]`,
          "7"
        )
        .replaceAll(
          `["stone_slab_type_2":"red_nether_brick","top_slot_bit":true]`,
          "7"
        )
        .replaceAll(
          `["stone_slab_type_2":"red_sandstone","top_slot_bit":false]`,
          "0"
        )
        .replaceAll(
          `["stone_slab_type_2":"red_sandstone","top_slot_bit":true]`,
          "0"
        )
        .replaceAll(
          `["stone_slab_type_2":"red_sandstone","top_slot_bit":true]`,
          "8"
        )
        .replaceAll(
          `["stone_slab_type_2":"smooth_sandstone","top_slot_bit":false]`,
          "6"
        )
        .replaceAll(
          `["stone_slab_type_2":"smooth_sandstone","top_slot_bit":true]`,
          "6"
        )
        .replaceAll(
          `["stone_slab_type_4":"cut_red_sandstone","top_slot_bit":true]`,
          "4"
        )
        .replaceAll(
          `["stone_slab_type_4":"cut_sandstone","top_slot_bit":true]`,
          "3"
        )
        .replaceAll(
          `["stone_slab_type_4":"mossy_stone_brick","top_slot_bit":false]`,
          "0"
        )
        .replaceAll(
          `["stone_slab_type_4":"mossy_stone_brick","top_slot_bit":true]`,
          "0"
        )
        .replaceAll(
          `["stone_slab_type_4":"smooth_quartz","top_slot_bit":false]`,
          "1"
        )
        .replaceAll(
          `["stone_slab_type_4":"smooth_quartz","top_slot_bit":true]`,
          "1"
        )
        .replaceAll(`["stone_slab_type_4":"stone","top_slot_bit":false]`, "2")
        .replaceAll(`["stone_slab_type_4":"stone","top_slot_bit":true]`, "2")
        .replaceAll(`["stone_type":"andesite"]`, "5")
        .replaceAll(`["stone_type":"andesite_smooth"]`, "6")
        .replaceAll(`["stone_type":"diorite"]`, "3")
        .replaceAll(`["stone_type":"diorite_smooth"]`, "4")
        .replaceAll(`["stone_type":"granite"]`, "1")
        .replaceAll(`["stone_type":"granite_smooth"]`, "2")
        .replaceAll(`["stone_type":"stone"]`, "0")
        .replaceAll(`["tall_grass_type":"default"]`, "0")
        .replaceAll(`["tall_grass_type":"fern"]`, "2")
        .replaceAll(`["tall_grass_type":"snow"]`, "3")
        .replaceAll(`["tall_grass_type":"tall"]`, "1")
        .replaceAll(`["top_slot_bit":false,"wood_type":"acacia"]`, "4")
        .replaceAll(`["top_slot_bit":false,"wood_type":"birch"]`, "2")
        .replaceAll(`["top_slot_bit":false,"wood_type":"dark_oak"]`, "5")
        .replaceAll(`["top_slot_bit":false,"wood_type":"jungle"]`, "3")
        .replaceAll(`["top_slot_bit":false,"wood_type":"oak"]`, "0")
        .replaceAll(`["top_slot_bit":false,"wood_type":"spruce"]`, "1")
        .replaceAll(`["top_slot_bit":false]`, "0")
        .replaceAll(`["top_slot_bit":true,"wood_type":"acacia"]`, "12")
        .replaceAll(`["top_slot_bit":true,"wood_type":"birch"]`, "10")
        .replaceAll(`["top_slot_bit":true,"wood_type":"dark_oak"]`, "13")
        .replaceAll(`["top_slot_bit":true,"wood_type":"jungle"]`, "11")
        .replaceAll(`["top_slot_bit":true,"wood_type":"oak"]`, "8")
        .replaceAll(`["top_slot_bit":true,"wood_type":"spruce"]`, "9")
        .replaceAll(`["top_slot_bit":true]`, "0")
        .replaceAll(`["torch_facing_direction":"east"]`, "2")
        .replaceAll(`["torch_facing_direction":"north"]`, "3")
        .replaceAll(`["torch_facing_direction":"south"]`, "4")
        .replaceAll(`["torch_facing_direction":"top"]`, "5")
        .replaceAll(`["torch_facing_direction":"unknown"]`, "0")
        .replaceAll(`["torch_facing_direction":"west"]`, "1")
        .replaceAll(`["update_bit":false]`, "0")
        .replaceAll(`["upside_down_bit":false,"weirdo_direction":0]`, "0")
        .replaceAll(`["upside_down_bit":false,"weirdo_direction":1]`, "1")
        .replaceAll(`["upside_down_bit":false,"weirdo_direction":2]`, "2")
        .replaceAll(`["upside_down_bit":false,"weirdo_direction":3]`, "3")
        .replaceAll(`["upside_down_bit":true,"weirdo_direction":0]`, "4")
        .replaceAll(`["upside_down_bit":true,"weirdo_direction":1]`, "5")
        .replaceAll(`["upside_down_bit":true,"weirdo_direction":2]`, "6")
        .replaceAll(`["upside_down_bit":true,"weirdo_direction":3]`, "7")
        .replaceAll(`["vine_direction_bits":0]`, "0")
        .replaceAll(`["vine_direction_bits":10]`, "10")
        .replaceAll(`["vine_direction_bits":11]`, "11")
        .replaceAll(`["vine_direction_bits":12]`, "12")
        .replaceAll(`["vine_direction_bits":13]`, "13")
        .replaceAll(`["vine_direction_bits":14]`, "14")
        .replaceAll(`["vine_direction_bits":15]`, "15")
        .replaceAll(`["vine_direction_bits":16]`, "16")
        .replaceAll(`["vine_direction_bits":1]`, "1")
        .replaceAll(`["vine_direction_bits":2]`, "2")
        .replaceAll(`["vine_direction_bits":3]`, "3")
        .replaceAll(`["vine_direction_bits":4]`, "4")
        .replaceAll(`["vine_direction_bits":5]`, "5")
        .replaceAll(`["vine_direction_bits":6]`, "6")
        .replaceAll(`["vine_direction_bits":7]`, "7")
        .replaceAll(`["vine_direction_bits":8]`, "8")
        .replaceAll(`["vine_direction_bits":9]`, "9");
      console.log("Function 2");
    };
    const Function3 = () => {
      H = G.replaceAll(
        `["wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
        "0"
      )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"andesite","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "4"
        )
        .replaceAll(
          `["wall_block_type":"brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "6"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"shor","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"short","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"short","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"cobblestone","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "0"
        )
        .replaceAll(
          `["wall_block_type":"diorite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `["wall_block_type":"diorite","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `["wall_block_type":"diorite","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `["wall_block_type":"diorite","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `["wall_block_type":"diorite","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `["wall_block_type":"diorite","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "3"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_cobblestone","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "1"
        )
        .replaceAll(
          `["wall_block_type":"mossy_stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "8"
        )
        .replaceAll(
          `["wall_block_type":"mossy_stone_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":false]`,
          "8"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "9"
        )
        .replaceAll(
          `["wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `["wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `["wall_block_type":"prismarine","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `["wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `["wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `["wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `["wall_block_type":"prismarine","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "11"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"none","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"short","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"none","wall_connection_type_south":"tall","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_nether_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"tall","wall_post_bit":true]`,
          "13"
        )
        .replaceAll(
          `["wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `["wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `["wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `["wall_block_type":"red_sandstone","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `["wall_block_type":"red_sandstone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `["wall_block_type":"red_sandstone","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "12"
        )
        .replaceAll(
          `["wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `["wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `["wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"none","wall_connection_type_south":"short","wall_connection_type_west":"short","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `["wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":true]`,
          "6"
        )
        .replaceAll(
          `["wall_block_type":"stone_brick","wall_connection_type_east":"none","wall_connection_type_north":"short","wall_connection_type_south":"short","wall_connection_type_west":"none","wall_post_bit":false]`,
          "7"
        )
        .replaceAll(
          `["wall_block_type":"stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"none","wall_connection_type_south":"none","wall_connection_type_west":"short","wall_post_bit":false]`,
          "7"
        )
        .replaceAll(
          `["wall_block_type":"stone_brick","wall_connection_type_east":"short","wall_connection_type_north":"short","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        )
        .replaceAll(
          `["wall_block_type":"stone_brick","wall_connection_type_east":"tall","wall_connection_type_north":"tall","wall_connection_type_south":"none","wall_connection_type_west":"none","wall_post_bit":true]`,
          "7"
        );
      console.log("Function 3");
    };

    Function1();
    Function2();
    Function3();
    props.contentOutputTargetRef.current.value = H;
    props.contentOutputTargetHoldDataRef(H); 
    props.downloadFile();
  };

  return (
    <button className="green" onClick={FileProcessTwo}>
      Step One
    </button>
  );
};
export default FileOutPutButtonOne;
