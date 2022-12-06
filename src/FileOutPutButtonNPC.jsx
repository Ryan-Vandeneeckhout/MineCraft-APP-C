const FileOutPutButtonNPC = (props) => {
  const FileOutputNPCLogic = () => {
    if (
      (props.contentOutputTargetRef.current.value === undefined && props.contentOutputTargetHoldDataRef.current.value === undefined) || (
      props.contentOutputTargetRef.current.value === null && props.contentOutputTargetHoldDataRef.current.value === null)
    );
    else {
      let content = props.contentOutputTargetHoldDataRef.current.value;
      const commands = getUsefulCommands(content);
      let commands_per_npc = props.valueInput;
      let nbt_name = "Kitty_Shizz";
      let curSec = 0;
      let NBTdata = getBlockOpener(nbt_name);
      let NPCCount = Math.ceil(commands.length / commands_per_npc);
      for (var i = 0; i < commands.length; i += commands_per_npc) {
        curSec++;
        let NPCCommandList = commands.slice(i, i + commands_per_npc);
        let nextNPC = curSec === NPCCount ? 1 : curSec + 1;

        // Need to add special commands per NPC
        NPCCommandList.unshift(`/tickingarea add circle ~ ~ ~ 4 NPCCOMMANDS`);
        NPCCommandList.push(`/tickingarea remove NPCCOMMANDS`);
        if (NPCCount > 1) {
          NPCCommandList.push(
            `/dialogue open @e[tag=${nbt_name}${nextNPC},type=NPC] @initiator`
          );
        }
        NPCCommandList.push(`/kill @s`);

        // Build meat and potatoes of the NPC
        NBTdata += getNPCOpener(curSec, nbt_name);
        NBTdata += NPCCommandList.map((x) => commandToNBT(x.trim())).join(",");
        NBTdata += getNPCCloser();

        // If there will be another NPC, glue with comma
        if (curSec < NPCCount) {
          NBTdata += ",";
        }
      }
      NBTdata += getBlockCloser();
      props.contentOutputTargetRef.current.value = NBTdata;
      props.downloadFile();
    }

    function getUsefulCommands(content) {
      return content
        .split("\n")
        .map((x) => x.replace(/^\//, "").trim())
        .filter((x) => {
          return (
            x.search("setblock") === 0 ||
            x.search("fill") === 0 ||
            x.search("summon") === 0
          );
        });
    }

    function getBlockOpener(nbt_name) {
      return `{Block:{name:"minecraft:${props.valueBlockInput}",states:{direction:0,honey_level:0},version:17959425},Count:1b,Damage:0s,Name:"minecraft:${props.valueBlockInput}",Slot:13b,WasPickedUp:0b,tag:{display:{Lore:["Â§lÂ§bMade By: Â§dKitty Shizzî„€","Â§aNBT Tool By: Â§eBrutus314 ","Â§eand Clawsky123","Â§4Warning: Â§cDont Hold Too","Â§cMany Or You Will Lag!!Â§âˆ†"],Name:"Â§dKittys Builds: Â§gÂ§l${nbt_name}"},Occupants:[`;
    }

    function getBlockCloser() {
      return "]}}";
    }

    function getNPCOpener(section, nbt_name) {
      return `{ActorIdentifier:"minecraft:npc<>",SaveData:{Persistent:1b,Variant:3,RawtextName:"Â§lÂ§dKittys Builds: ${nbt_name}",CustomName:"Â§lÂ§dKittys Builds: ${nbt_name}",CustomNameVisible:1b,Tags:["${nbt_name}${section}"],Actions:"[{"button_name" : "Build Part: ${section}","data" : [`;
    }

    function getNPCCloser() {
      return `],"mode" : 0,"text" : "","type" : 1}]",InterativeText:"Â§cBuild By: Â§dKitty Shizz!!î„€\nÂ§cNBT Tool By: Â§dBrutus314 and Clawsky123.\nÂ§6Thanks For Trying Out One Of My Builds!!!"},TicksLeftToStay:0}`;
    }

    function commandToNBT(command) {
      return JSON.stringify({
        cmd_line: command,
        cmd_ver: 12,
      });
    }
  };

  return (
    <button className="yellow" onClick={FileOutputNPCLogic}>
      Convert File to NPC
    </button>
  );
};
export default FileOutPutButtonNPC;
