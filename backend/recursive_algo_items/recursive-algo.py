#recursive-algo
import json 

nodes = []
edges = []
infoDict = {}

with open('abc.json', 'r') as file:
    data = json.load(file)

# make sure algo adds things things to the array in the React flow format
def add_node_and_edges(node, parent=None):
    # Add the node to the nodes array
    if parent == None:
        nodes.append({"id" : node["title"], "type" : "input", "data" : {"label": node["title"]}, "position": {'x':0, 'y':0}})
    else:
        nodes.append({"id" : node["title"], "data" : {"label": node["title"]}, "position": {'x':0, 'y':0}})
    
    if "quotes" in node:
        infoDict[node["title"]] = [node["summary"], node["quotes"]]
    else:
        infoDict[node["title"]] = [node["summary"], []]
    
    # If there is a parent, add an edge
    if parent:
        #edges.append((parent, node["title"]))
        edges.append({"id" : parent + "-" + node["title"], "source" : parent, "target": node["title"], "type": "straight"})

    # Recursively add sub-nodes
    if "sub-topics" in node and node["sub-topics"]:
        for sub_node in node["sub-topics"]:
            add_node_and_edges(sub_node, node["title"])

# Start the recursion with the main topic
add_node_and_edges(data)

# Output the nodes and edges
print("Nodes:", nodes)
print("------------------------------------------")
print("Edges:", edges)
print("------------------------------------------")
print("InfoDict:", infoDict)