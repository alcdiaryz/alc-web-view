"use client"
import React, { useEffect } from "react";

const ChannelTalk: React.FC = () => {
    useEffect(() => {
        ChannelIO('boot', {
            "pluginKey": "039ab381-0a3f-4ed9-8bef-3d186bbf2b1b"
          });
    })

    return(
        <></>
    )
}

export default ChannelTalk;