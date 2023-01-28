import { Divider, List, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import LocIcon from '../../../public/placeholder.png';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export default function SearchBox(props) {
      const { selectPosition, setSelectPosition } = props;
      const [searchText, setSearchText] = useState("");
      const [listPlace, setListPlace] = useState([]);

      return (
            <div className="mt-6">
                  <div>
                        <div style={{ flex: 1 }}>
                              <TextField
                                    required
                                    label="Search your location"
                                    style={{ width: "100%" }}
                                    value={searchText}
                                    variant="filled"
                                    onChange={(event) => {
                                          setSearchText(event.target.value);
                                          const params = {
                                                q: event.target.value,
                                                format: "json",
                                                addressdetails: 1,
                                                polygon_geojson: 0,
                                          };
                                          const queryString = new URLSearchParams(params).toString();
                                          const requestOptions = {
                                                method: "GET",
                                                redirect: "follow",
                                          };
                                          fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                                                .then((response) => response.text())
                                                .then((result) => {
                                                      setListPlace(JSON.parse(result));
                                                })
                                                .catch((err) => console.log("err: ", err));
                                    }}
                              />
                        </div>
                        <div
                              style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
                        >
                        </div>
                  </div>

                  <div>
                        <List component="nav" aria-label="main mailbox folders">
                              {listPlace.map((item) => {
                                    return (
                                          <div key={item?.place_id}>
                                                <ListItem
                                                      button
                                                      onClick={() => {
                                                            setSelectPosition(item);
                                                            setListPlace([]);
                                                            setSearchText(item?.display_name)
                                                      }}
                                                >
                                                      <ListItemIcon>
                                                            <Image
                                                                  src={LocIcon}
                                                                  alt="Placeholder"
                                                                  width={25}
                                                                  height={25}
                                                            />
                                                      </ListItemIcon>
                                                      <ListItemText primary={item?.display_name} />
                                                </ListItem>
                                                <Divider />
                                          </div>
                                    );
                              })}
                        </List>
                  </div>
            </div>
      );
}